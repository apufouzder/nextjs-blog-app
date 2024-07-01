import React from 'react';
import BlogCard from './BlogCard';
import img1 from "../assets/gad2.jpg";
import SectionHeading from './SectionHeading';

const BlogSection = () => {
    const blogs = [
        {
            id: 1,
            title: "Blog title for 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id maiores, ipsum tempore sit quisquam.",
            image: img1,
            author: "Apu Fouzder",
            category: "LifeStyle",
            date: "Jun 08, 2009",
        },
        {
            id: 2,
            title: "Blog title for 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id maiores, ipsum tempore sit quisquam.",
            image: img1,
            author: "Apu Fouzder",
            category: "LifeStyle",
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
            category: "LifeStyle",
            date: "Jun 08, 2009",
        },
    ]
    return (
        <>
            <SectionHeading heading="New Blog Here" />
            <div className='grid grid-cols-3 gap-8'>
                {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
            </div>
        </>
    );
};

export default BlogSection;