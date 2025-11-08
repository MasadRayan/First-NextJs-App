import Link from 'next/link';
import React from 'react';

export const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data
}

export const metadata = {
  title: "All Posts",
  description: "Loading Jsonplaceholder posts using Server Component",
};

const Posts = async () => {
    const posts = await getPost();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                posts.map((singlePost) => {
                    return (
                        <div key={singlePost.id}>
                            <h1 className='text-2xl font-bold text-red-500'>
                               Title: {singlePost.title}</h1>
                            <p className='mb-5'>{singlePost.body}</p>
                            <Link href={`/posts/${singlePost.id}`}  className='px-6 py-3  bg-cyan-600 text-white rounded-3xl'>Read more</Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Posts;