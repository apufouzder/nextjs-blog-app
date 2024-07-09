"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BlogListPage() {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs);
    const getBlogs = async () => {
        const res = await axios.get('/api/blog');
        setBlogs(res.data.result)
    }

    useEffect(() => {
        getBlogs();
    }, [])
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-6">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-base bg-lightWhite text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Image
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Author
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => (
                        <tr key={blog._id} class="border-b border-lightWhite dark:border-gray-700">
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                <Image width={80} height={80} src={`${blog.image}`} alt="photo" />
                                {/* <img src="/1720464281715_game2.jpg" alt="" /> */}
                            </th>
                            <td class="px-6 py-2">
                                {blog.title}
                            </td>
                            <td class="px-6 py-2 bg-gray-50 dark:bg-gray-800">
                            {blog.category}
                            </td>
                            <td class="px-6 py-2">
                            {blog.author}
                            </td>
                            <td class="px-6 py-2">
                                X
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}