'use client'
import ItemList from '@/app/components/main/items/ItemList'
import axios from 'axios'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Modal from 'react-modal'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'black',
		borderColor: 'yellow',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
}

let inputStyle = 'bg-transparent border border-yellow-500 outline-none p-1'

export default function AdminDashboardPage() {
	const [isAddModalOpen, setIsAddModalOpen] = useState(false)
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

	const [name, setName] = useState('')
	const [inputPrice, setInputPrice] = useState('')
	const [item_type, setItemType] = useState('')
	const [photo, setPhoto] = useState('')

	const [inputId, setInputId] = useState('')

	const openAddModal = () => {
		setIsAddModalOpen(true)
	}

	const closeAddModal = () => {
		setIsAddModalOpen(false)
	}

	const openDelModal = () => {
		setIsDeleteModalOpen(true)
	}

	const closeDelModal = () => {
		setIsDeleteModalOpen(false)
	}

	const sendAddFormHandler = async (e: React.FormEvent) => {
		e.preventDefault()

		const price = parseInt(inputPrice)

		await axios
			.post('https://edem-server.vercel.app/api/item/additem', {
				name,
				price,
				item_type,
				photo,
			})
			.then(res => {
				console.log(res.data)
				setName('')
				setInputPrice('')
				setItemType('')
				setPhoto('')
				setIsAddModalOpen(false)
			})
			.catch(err => console.error(err))
	}

	const sendDelFormHandler = async (e: React.FormEvent) => {
		e.preventDefault()
		const id = parseInt(inputId)
		await axios
			.delete(`https://edem-server.vercel.app/api/item/deleteitem/${id}`)
			.then(res => {
				console.log(res)
				setInputId('')
				setIsDeleteModalOpen(false)
			})
			.catch(error => console.error(error))
	}
	return (
		<div className='flex justify-center flex-col items-center'>
			<h3 className='text-2xl py-4'>Панель управління</h3>
			<div className='flex flex-col sm:flex-row gap-5'>
				<button
					className='bg-yellow-600 py-1 px-4 rounded-md'
					onClick={openAddModal}
				>
					Додати
				</button>
				<Modal
					isOpen={isAddModalOpen}
					contentLabel='Example modal'
					onRequestClose={closeAddModal}
					style={customStyles}
				>
					<div className='flex flex-col gap-3'>
						<button
							onClick={closeAddModal}
							className='flex justify-end text-3xl'
						>
							<IoMdClose />
						</button>
						<form className='flex flex-col gap-3' onSubmit={sendAddFormHandler}>
							<div className='flex flex-col'>
								<label>Назва</label>
								<input
									type='text'
									className={inputStyle}
									maxLength={20}
									onChange={e => setName(e.target.value)}
								/>
							</div>
							<div className='flex flex-col'>
								<label>Ціна</label>
								<input
									type='text'
									className={inputStyle}
									onChange={e => setInputPrice(e.target.value)}
								/>
							</div>
							<div className='flex flex-col'>
								<label>Тип (box, bouquet)</label>
								<input
									type='text'
									className={inputStyle}
									onChange={e => setItemType(e.target.value)}
								/>
							</div>
							<div className='flex flex-col'>
								<label>Фото (url)</label>
								<input
									type='text'
									className={inputStyle}
									onChange={e => setPhoto(e.target.value)}
								/>
							</div>
							<button className='bg-yellow-500 py-1'>Додати</button>
						</form>
					</div>
				</Modal>

				<button
					className='bg-yellow-600 py-1 px-4 rounded-md'
					onClick={openDelModal}
				>
					Видалити
				</button>
				<Modal
					isOpen={isDeleteModalOpen}
					contentLabel='Example modal'
					onRequestClose={closeDelModal}
					style={customStyles}
				>
					<div className='flex flex-col gap-3'>
						<button
							onClick={closeDelModal}
							className='flex justify-end text-3xl'
						>
							<IoMdClose />
						</button>
						<form className='flex flex-col gap-3' onSubmit={sendDelFormHandler}>
							<div className='flex flex-col'>
								<label>id</label>
								<input
									type='text'
									className={inputStyle}
									maxLength={3}
									onChange={e => setInputId(e.target.value)}
								/>
							</div>
							<button className='bg-yellow-500 py-1'>Видалити</button>
						</form>
					</div>
				</Modal>
			</div>
			<ItemList />
		</div>
	)
}
