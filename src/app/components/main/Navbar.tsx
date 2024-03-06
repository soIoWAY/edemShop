import Link from 'next/link'

const navUlLiStyles =
	'hover:bg-yellow-600 transition-all bg-transparent border-2 border-yellow-600 rounded-md py-2 px-4'

const Navbar = () => {
	return (
		<div className='flex flex-col gap-8'>
			<h1 className='text-3xl font-semibold tracking-wider'>Асортимент</h1>
			<nav>
				<div className='overflow-x-scroll overflow-y-hidden whitespace-nowrap p-2'>
					<ul className='flex gap-14 text-base'>
						<li>
							<Link href='/catalog' className={navUlLiStyles}>
								Каталог
							</Link>
						</li>
						<li>
							<Link href='/catalog/bouquets' className={navUlLiStyles}>
								Букети
							</Link>
						</li>
						<li>
							<a href='' className={navUlLiStyles}>
								Кульки
							</a>
						</li>
						<li>
							<a href='' className={navUlLiStyles}>
								Сухоцвіти
							</a>
						</li>
						<li>
							<a href='' className={navUlLiStyles}>
								Контакти
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
