'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const NavBar = () => {
    const pathname = usePathname();
    if (!pathname.includes('dashboard')) {
        return (
            <div className='sticky top-0 z-50 bg-transparent backdrop-blur-2xl py-4'>
                <nav className='flex justify-center'>
                    <ul className='flex items-center justify-between w-1/2 text-3xl font-semibold '>
                        <Link href={'/'}>
                            <li className='hover:text-amber-500 cursor-pointer'>Home</li>
                        </Link>
                        <Link href={'/about'}>
                            <li className='hover:text-amber-500 cursor-pointer'>About</li>
                        </Link>
                        <Link href={'/services'}>
                            <li className='hover:text-amber-500 cursor-pointer'>Services</li>
                        </Link>
                        <Link href={'/posts'}>
                            <li className='hover:text-amber-500 cursor-pointer'>
                                Posts
                            </li>
                        </Link>
                        <Link href={'/meals'}>
                            <li className='hover:text-amber-500 cursor-pointer'>
                                Meals
                            </li>
                        </Link>
                        <Link href={'/register'}>
                            <li className='hover:text-amber-500 cursor-pointer'>
                                Register
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        );
    }
    else {
        return <></>
    }

};

export default NavBar;