import * as jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'
export default function middleware(req: NextRequest) {
	const token = req.cookies.get('token')
	let url = req.url

	if (!token && url?.includes('/dashboard')) {
		return NextResponse.redirect('https://edemflowershop.vercel.app/')
	}

	if (!token && url?.includes('/admin-dashboard')) {
		return NextResponse.redirect('https://edemflowershop.vercel.app/')
	}

	if (token && (url?.includes('/signin') || url?.includes('/signup'))) {
		return NextResponse.redirect('https://edemflowershop.vercel.app/dashboard')
	}

	try {
		if (token) {
			const decoded = jwt.decode(token.value) as { role: string }

			if (decoded.role !== 'admin' && url?.includes('/admin-dashboard')) {
				return NextResponse.redirect('https://edemflowershop.vercel.app/')
			}
			if (decoded.role === 'admin' && url?.includes('/dashboard')) {
				return NextResponse.redirect(
					'https://edemflowershop.vercel.app/admin-dashboard'
				)
			}
		}
	} catch (error) {
		console.error('Помилка розшифрування токена - ', error)
		return NextResponse.redirect('https://edemflowershop.vercel.app/')
	}
}
