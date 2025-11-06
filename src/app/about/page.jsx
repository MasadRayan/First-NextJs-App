"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
    const route = useRouter();
    const isLoggedIn = false;
    const handleNavigate= () =>{
        if (isLoggedIn) {
            route.push('/about/address');
        }
        else {
            route.push('/');
        }
    }
    return (
        <div>
            <p className='text-3xl font-bold'>This is the about page</p>
            <p>
                <Link href={'/about/address'}>
                    <button className='hover:text-amber-500 cursor-pointer'>Address</button>
                </Link>
            </p>
            <button className='btn hover:text-amber-400' type='button' onClick={handleNavigate}>
                Address Page
            </button>
        </div>
    );
};

export default AboutPage;