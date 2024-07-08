"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className='bg-lightWhite h-screen flex flex-col items-center gap-4 pt-6 w-52 px-4'>
            <h1 className='text-2xl font-bold mb-4'>Logo</h1>
            <div className={`${pathname == "/admin/addBlog" ? "active bg-darkBlack text-white font-medium" : ""} w-full text-center text-lg duration-200`}>
                <Link href={'/admin/addBlog'}>Add Blog</Link>
            </div>
            <div className={`${pathname == "/admin/blogList" ? "active bg-darkBlack text-white font-medium" : ""} w-full text-center text-lg duration-200`}>
                <Link href={'/admin/blogList'}>Blog List</Link>
            </div>
            <div className={`${pathname == "/admin/subscribeEmail" ? "active bg-darkBlack text-white font-medium" : ""} w-full text-center text-lg duration-200`}>
                <Link href={'/admin/subscribeEmail'}>Subscribe</Link>
            </div>
        </div>
    );
};

export default Sidebar;