import React from 'react';
import notFound from '../../404-gif.gif'

const NotFound = () => {
    return (
        <div className='pt-20 text-center bg-[#333333] h-screen'>
            <p className='text-6xl mb-6 text-cyan-500'>Page Not Found</p>
            <img className='pl-44' src={notFound} alt="" />

        </div>
    );
};

export default NotFound;