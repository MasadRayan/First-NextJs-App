import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request) {

    const userInfo = {
        role: 'user',
        email: 'test@admin.com',
    }

    let isServices = request.nextUrl.pathname.startsWith('/hi');
    let isAdmin = userInfo.role == 'admin';

    if (isServices && !isAdmin) {
        return NextResponse.rewrite(new URL('/not-found', request.url));
        
    }
    return NextResponse.next()
}

