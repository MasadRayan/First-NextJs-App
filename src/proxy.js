import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
import { boolean } from 'zod';

// This function can be marked `async` if using `await` inside
export async function proxy(req) {

    const token = await getToken({ req });
    const isToken = Boolean(token);
    const isAdminUser = token?.role == 'admin';
    const isAdminSpecificPage = req.nextUrl.pathname.startsWith('/services');
    if (isAdminSpecificPage && ! isAdminUser) {
        const callBackUrl = encodeURIComponent(req.nextUrl.pathname);
        return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callBackUrl}`, req.url));
    }

    return NextResponse.next();
}

