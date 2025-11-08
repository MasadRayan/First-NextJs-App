"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, {  useEffect, useState } from 'react';
const MealSearchInput = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        const searchQuery = {search} ;
        const urlQueryParams = new URLSearchParams(searchQuery);
        const url = `${pathName}?${urlQueryParams}`;
        router.push(url);
    }, [search])

    return (
        <div>
            <div className='mb-5 gap-3 flex flex-col justify-center items-center'>
                <legend>Search Your Meal</legend>
                <input type="text" onChange={(e) => setSearch(e.target.value)} className='input' placeholder='Enter the desired meal' />
            </div>
        </div>
    );
};

export default MealSearchInput;