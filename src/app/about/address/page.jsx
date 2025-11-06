import Link from 'next/link';
import React from 'react';

const AddressPage = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold'>This is the address Page</h2>
            <Link href={'/about/address/navigate'}>
                <nav className='hover:text-amber-400 cursor-pointer '>
                    Navigate
                </nav>
            </Link>
        </div>
    );
};

export default AddressPage;