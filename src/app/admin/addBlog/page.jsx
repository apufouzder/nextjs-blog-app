"use client"
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddBlogPage() {
    const [image, setImage] = useState(false);

    const [data, setData] = useState({
        title: "",
        description: "",
        category: "",
        author: "../../../assets/apu.png",
        authorImg: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }));
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);
        formData.append('image', image);

        const res = await axios.post('/api/blog', formData);
        console.log(res);
        if (res.status === 200) {
            toast.success(res.data.message);
            setData({
                title: "",
                description: "",
                category: "",
                author: "",
                authorImg: "",
            })
            setImage(false);
        } else {
            toast.error("Error: added blog");
        }
    }

    return (
        <div className="w-[600px] mx-auto bg-white shadow-md rounded-md p-4 mt-4">
            <h2 className="text-3xl font-semibold text-center mb-3">Add New Blog</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <label className="text-lg font-semibold" htmlFor="title">Title:</label>
                    <input type="text" onChange={handleChange} value={data.title} name="title" placeholder="Enter title" className="border-secondary border py-2 w-full focus:outline-none px-2 rounded" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-lg font-semibold" htmlFor="description">Description:</label>
                    <input type="text" onChange={handleChange} value={data.description} name="description" placeholder="Enter description" className="border-secondary border py-2 w-full focus:outline-none px-2 rounded" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-lg font-semibold" htmlFor="category">Category:</label>
                    <input type="text" onChange={handleChange} value={data.category} name="category" placeholder="Enter category" className="border-secondary border py-2 w-full focus:outline-none px-2 rounded" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-lg font-semibold" htmlFor="author">Author:</label>
                    <input type="text" onChange={handleChange} value={data.author} name="author" placeholder="Enter author" className="border-secondary border py-2 w-full focus:outline-none px-2 rounded" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-lg font-semibold" htmlFor="authorImg">Author Img:</label>
                    <input type="text" onChange={handleChange} value={data.authorImg} name="authorImg" placeholder="Enter author Img url" className="border-secondary border py-2 w-full focus:outline-none px-2 rounded" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-lg font-semibold" htmlFor="image">Image:</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} name="image" placeholder="Enter image" className="border-secondary border py-2 w-full focus:outline-none px-2 rounded" />
                </div>
                <div className="flex flex-col gap-1">
                    <img width={70} src={image && URL.createObjectURL(image)} alt="" />
                </div>

                <button type="submit" className="bg-darkBlack mt-4 hover:bg-primary duration-200 rounded-md text-white px-3 py-2 text-lg font-medium">Submit</button>
            </form>
        </div>
    );
}