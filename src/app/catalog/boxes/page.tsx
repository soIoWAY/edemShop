'use client'
import CatalogNav from '@/app/components/catalog/CatalogNav'
import CatalogSort from '@/app/components/catalog/CatalogSort'
import ItemList from '@/app/components/main/items/ItemList'

export default function BoxesPage() {
	return (
		<div>
			<h1 className='tracking-wider text-3xl mt-10'>Букети</h1>
			<CatalogNav />
			<div className='mt-5'>
				<CatalogSort />
				<ItemList />
			</div>
		</div>
	)
}
