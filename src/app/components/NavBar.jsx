import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav className='flex justify-center'>
                <ul className='flex items-center justify-between w-1/2'>
                    <Link href={'/'}>
                        <li className='hover:text-amber-500 cursor-pointer'>Home</li>
                    </Link>
                    <Link href={'/about'}>
                        <li className='hover:text-amber-500 cursor-pointer'>About</li>
                    </Link>
                    <Link href={'/services'}>
                        <li className='hover:text-amber-500 cursor-pointer'>Services</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;