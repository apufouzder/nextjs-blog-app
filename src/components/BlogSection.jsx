"use client"
import { useState } from 'react';
import BlogCard from './BlogCard';
import img1 from "../assets/gad2.jpg";
import SectionHeading from './SectionHeading';

const BlogSection = () => {
    const [menu, setMenu] = useState('All');

    const blogs = [
        {
            id: 1,
            title: "Blog title for 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id maiores, ipsum tempore sit quisquam.",
            image: img1,
            author: "Apu Fouzder",
            category: "Tech",
            date: "Jun 08, 2009",
        },
        {
            id: 2,
            title: "Blog title for 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id maiores, ipsum tempore sit quisquam.",
            image: img1,
            author: "Apu Fouzder",
            category: "Tech",
            date: "Jun 08, 2009",
        },
        {
            id: 3,
            title: "Blog title for 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id maiores, ipsum tempore sit quisquam.",
            image: img1,
            author: "Apu Fouzder",
            category: "LifeStyle",
            date: "Jun 08, 2009",
        },
        {
            id: 4,
            title: "Blog title for 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id maiores, ipsum tempore sit quisquam.",
            image: img1,
            author: "Apu Fouzder",
            category: "LifeStyle",
            date: "Jun 08, 2009",
        },
        {
            id: 5,
            title: "Blog title for 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id maiores, ipsum tempore sit quisquam.",
            image: img1,
            author: "Apu Fouzder",
            category: "Tech",
            date: "Jun 08, 2009",
        },
    ]
    return (
        <>
            <SectionHeading heading="New Blog Here" />
            <div className='flex justify-center mb-4 gap-6 items-center'>
                <button onClick={() => setMenu("All")} className={`${menu === "All" && 'bg-darkBlack text-white'} border text-lg px-3 py-1 rounded`}>All</button>
                <button onClick={() => setMenu("LifeStyle")} className={`${menu === "LifeStyle" && 'bg-darkBlack text-white'} border text-lg px-3 py-1 rounded`}>LifeStyle</button>
                <button onClick={() => setMenu("Tech")} className={`${menu === "Tech" && 'bg-darkBlack text-white'} border text-lg px-3 py-1 rounded`}>Tech</button>
            </div>
            <div className='grid grid-cols-3 gap-8'>
                {blogs.filter((item) => menu === 'All' ? true : item.category === menu).map(blog => <BlogCard key={blog.id} blog={blog} />)}
            </div>
        </>
    );
};

export default BlogSection;