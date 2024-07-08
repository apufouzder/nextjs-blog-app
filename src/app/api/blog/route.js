import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import BlogModel from "@/utils/Models/BlogModel";
import { ConnectDB } from "@/utils/config/db";

const LoadDB = async () => {
    ConnectDB();
}
LoadDB();

export async function GET(request) {
    const result = await BlogModel.find({});

    return NextResponse.json({result })
}

export async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp} ${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get('authorImg')}`,
    }

    const result = await BlogModel.create(blogData);

    return NextResponse.json({ 
        message: "Blog Create Successfully!",
        result,
     });
}