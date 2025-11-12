"use client"
import { signOut } from 'next-auth/react';
import React from 'react';

const LogOutButton = () => {
    return (
        <div>
            <button className='btn bg-green-500' onClick={() => signOut()}>LogOut</button>
        </div>
    );
};

export default LogOutButton;