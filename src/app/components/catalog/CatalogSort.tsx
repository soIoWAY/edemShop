import { useRouter } from 'next/navigation'

const CatalogSort = () => {
	const router = useRouter()
	const changeSortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value
		if (selectedValue.length > 1) {
			router.push(`/catalog?sort=${selectedValue}`)
		} else {
			router.push('/catalog')
		}
	}
	return (
		<div>
			<div className='flex gap-1 items-end flex-col'>
				<div className='flex gap-3 items-center'>
					<span className='hidden sm:block'>Сортувати: </span>
					<div className='border border-yellow-500 p-2 rounded-md bg-black'>
						<select className='bg-black' onChange={changeSortHandler}>
							<option value=''>За замовчуванням</option>
							<option value='price_desc'>Від дорожчих</option>
							<option value='price_asc'>Від дешевших</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CatalogSort
