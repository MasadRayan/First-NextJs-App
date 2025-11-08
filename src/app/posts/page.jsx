import React from 'react';

export const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data
}

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
                            <p>{singlePost.body}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Posts;