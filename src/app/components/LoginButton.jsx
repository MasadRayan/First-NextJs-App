"use client"
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

const LoginButton = () => {
    return (
        <div>
            <button onClick={() => signIn()} className='btn bg-amber-500 text-white'>Login</button>
        </div>
    );
};

export default LoginButton;