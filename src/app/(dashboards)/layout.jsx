import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12'>
            {/* sidebar */}
            <div className='col-span-3'>
                <ul className='decoration-0 space-y-5'>
                    <li>Profile</li>
                    <li>All Users</li>
                    <li>All services</li>
                </ul>
            </div>
            {/* content */}
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;