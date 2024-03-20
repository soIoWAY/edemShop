import Description from './components/main/Description'
import Footer from './components/main/Footer'
import Header from './components/main/Header'
import Logo from './components/main/Logo'
import Navbar from './components/main/Navbar'
import ItemList from './components/main/items/ItemList'

export default function Home() {
	return (
		<div className=''>
			<Header />
			<div className='w-[90%] sm:w-[75%] m-auto'>
				<Logo />

				<Navbar />
			</div>
			<ItemList />
			<Description />
			<Footer />
		</div>
	)
}
