import Image from 'next/image';
import React from 'react';

const BlogCard = ({blog}) => {
    return (
        <div className='shadow-md rounded-md p-4'>
            <Image src={blog?.image} placeholder='blur' alt='Card Img' />
            <h2 className='text-2xl font-semibold text-darkBlack my-4'>{ blog?.title}</h2>
            <div className='flex justify-between gap-4 items-center'>
                <strong className='bg-secondary text-white px-2 py-1 rounded-md'>{blog?.category}</strong>
                <strong className='text-secondary'>{ blog?.date}</strong>
            </div>
            <p className='my-4'>{blog?.desc}</p>
            <button className='underline font-semibold text-base text-primary'>More...</button>
        </div>
    );
};

export default BlogCard;