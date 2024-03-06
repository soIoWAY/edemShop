'use client'

import ItemList from '../main/items/ItemList'
import CatalogSort from './CatalogSort'

const CatalogWrapper = () => {
	return (
		<div className='mt-5'>
			<CatalogSort />
			<ItemList />
		</div>
	)
}

export default CatalogWrapper
