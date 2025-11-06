"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";

const SingleService = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://fakestoreapi.com/products");
            setData(res.data);
        };
        fetchData();
    }, []);

    const singleData = data.find((item) => item.id == id);

    if (!singleData) {
        return (
            <>
                <div className="flex flex-col justify-center items-center gap-5">
                    <p>Page Not Found</p>
                    <Link href={'/services'} className='px-6 py-3 border-2 border-pink-800 bg-pink-400 rounded-3xl '>Service Page</Link>
                </div>
            </>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">{singleData.title}</h1>
            <p className="text-gray-700">💰 {singleData.price}</p>
            <p className="text-gray-500">{singleData.description}</p>
            <img
                src={singleData.image}
                alt={singleData.title}
                className="w-48 h-48 object-contain mt-4"
            />
        </div>
    );
};

export default SingleService;
