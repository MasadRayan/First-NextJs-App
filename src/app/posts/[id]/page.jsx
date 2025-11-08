import Link from 'next/link';
import React from 'react';

export const fetchSinglePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

const SinglePostLoad = async ({ params }) => {
    const p = await params;
    const singlePost = await fetchSinglePost(p.id);
    return (
        <div>
            <h1 className='text-2xl font-bold'><span className=' text-red-500'>Post Title:</span> {singlePost.title}</h1>
            <p className='mb-5 text-base font-semibold'>{singlePost.body}</p>

            <Link className='px-6 py-3  bg-cyan-600 text-white rounded-3xl' href={'/posts'}>Back</Link>
        </div>
    );
};

export default SinglePostLoad;