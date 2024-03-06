import Image from 'next/image'

interface Item {
	name: string
	price: number
	photo: string
}

const Item = ({ photo, name, price }: Item) => {
	return (
		<div className='flex flex-wrap justify-center mx-auto'>
			<div className='max-w-sm m-4 p-4 bg-transparent rounded-lg flex flex-col justify-between '>
				<Image src={photo} width={320} height={320} alt={name} />
				<div className='mt-4 border-t border-b pb-2 border-yellow-500 pt-2'>
					<h2 className='text-xl font-semibold'>{name}</h2>
					<p className='mt-2'>
						<span className='text-yellow-500 font-bold'>{price}</span> грн
					</p>
					<button className='mt-4 bg-yellow-500 text-white font-bold py-2 px-12  '>
						Купити
					</button>
				</div>
			</div>
		</div>
		// <div className='w-full sm:w-1/2 md:w-1/3 lg:1/4 p-3'>
		// 	<div className='inline-block'>
		// 		<div className='border border-yellow-600 flex flex-col'>
		// 			<div className='border-b border-yellow-600'>
		// 				<Image src={photo} width={320} height={320} alt={name} />
		// 			</div>
		// 			<div className='px-1 py-1'>
		// 				<div className='text-left mb-5 whitespace-pre-wrap break-words max-w-[270px]'>
		// 					{name}
		// 				</div>
		// 				<div className='flex justify-between items-center'>
		// 					<div>{price} грн</div>
		// 					<div>
		// 						<button className='border border-yellow-600 px-3 py-1 hover:bg-yellow-600 transition-all'>
		// 							Купити
		// 						</button>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	)
}

export default Item
