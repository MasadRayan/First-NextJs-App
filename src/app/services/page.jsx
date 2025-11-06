"use client"
import Link from 'next/link';
import React, { useState } from 'react';


const ServicePage = () => {
    const [data, setData] = useState([]);

    const handleData = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setData(data);
    }

    console.log(data);
    return (
        <div className='container mx-auto'>
            <p className='font-bold text-3xl'>This is the services page</p>
            <button className='btn hover:text-amber-400' type='button' onClick={handleData}>Get Data</button>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map((item) => (
                        <div key={item.id} >
                            <div className='border border-slate-600 p-3 flex flex-col justify-center items-center gap-4 min-h-[600px]'>
                                <img className='h-[350px] w-[350px] object-contain ' src={item.image} alt={item.title} />
                                <h1>{item.title}</h1>
                                <h1>{item.price}</h1>
                                <p>{item.rating.rate}</p>
                                <Link href={`services/${item.id}`} className='btn px-6 py-3 bg-pink-400 text-black cursor-pointer hover:text-amber-400'>View</Link>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default ServicePage;