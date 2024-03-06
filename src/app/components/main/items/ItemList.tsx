'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Item from './Item'

interface IItem {
	id: number
	name: string
	price: number
	photo: string
	item_type: string
}

async function getItems() {
	try {
		const res = await axios.get<IItem[]>('http://localhost:5555/api/item')
		return res.data
	} catch (error) {
		console.error(error)
		return []
	}
}

export default function ItemList() {
	const router = useRouter()
	const [items, setItems] = useState<IItem[]>([])

	useEffect(() => {
		const fetchItems = async () => {
			const fetchedItems = await getItems()
			setItems(fetchedItems)
		}
		fetchItems()
	}, [])

	return (
		<div className='flex flex-col items-center'>
			<div className='flex flex-wrap justify-between text-center'>
				{items.map(item => (
					<Item
						key={item.id}
						photo={item.photo}
						name={item.name.length > 23 ? item.name.slice(0, 15) : item.name}
						price={item.price}
					/>
				))}
			</div>
			<Link
				className='bg-yellow-600 py-3 px-12  font-semibold text-xl hover:bg-yellow-500 transition-all my-6 relative'
				href='/catalog'
			>
				Каталог
			</Link>
		</div>
	)
}
