import React from 'react';

const SingleService = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            <h1>This is the service of this {id}</h1>
        </div>
    );
};

export default SingleService;