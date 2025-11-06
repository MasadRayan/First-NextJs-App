import Link from 'next/link';
import React from 'react';

const NOtFoundPage = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <h1>404 PAGE NOT FOUND</h1>
            <Link href={'/'} className='px-6 py-3 border-2 border-pink-800 bg-pink-400 rounded-3xl '>Home</Link>
        </div>
    );
};

export default NOtFoundPage;