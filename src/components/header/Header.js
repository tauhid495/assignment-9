import React from 'react';
import CustomLink from '../customLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='md:flex font-semibold text-xl'>
                <CustomLink className='ml-12' to={'/home'}>Home</CustomLink>
                <CustomLink className='ml-12' to={'/reviews'}>Reviews</CustomLink>
                <CustomLink className='ml-12' to={'/analysis'}>Analysis</CustomLink>
                <CustomLink className='ml-12' to={'/blogs'}>Blogs</CustomLink>
                <CustomLink className='ml-12' to={'/contuctus'}>ContuctUs</CustomLink>

            </nav>
        </div>
    );
};

export default Header;