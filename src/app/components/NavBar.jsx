import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav className='flex justify-center'>
                <ul className='flex items-center justify-between w-1/2'>
                    <li className='hover:text-amber-500 cursor-pointer'>Home</li>
                    <li className='hover:text-amber-500 cursor-pointer'>About</li>
                    <li className='hover:text-amber-500 cursor-pointer'>Services</li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;