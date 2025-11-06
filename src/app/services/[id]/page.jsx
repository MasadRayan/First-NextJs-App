"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

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
    return <p>Loading...</p>;
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
