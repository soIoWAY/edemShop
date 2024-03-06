import Description from './components/main/Description'
import ItemList from './components/main/items/ItemList'

export default function Home() {
	return (
		<div className='mt-10'>
			<ItemList />
			<Description />
		</div>
	)
}
