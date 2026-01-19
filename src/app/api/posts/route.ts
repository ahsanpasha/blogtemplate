import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';

export async function GET(request: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const isFeatured = searchParams.get('featured');

        let query: any = {};
        if (category) query.category = category;
        if (isFeatured === 'true') query.isFeatured = true;

        const posts = await Post.find(query).sort({ createdAt: -1 });

        return NextResponse.json({
            status: 'success',
            payload: posts,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();

        const { title, category, categoryLink, date, readTime, image, content } = body;

        // Simple validation
        if (!title || !category || !content) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Generate slug from title
        const slug = title
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');

        const newPost = await Post.create({
            title,
            category,
            categoryLink: categoryLink || `/${category.toLowerCase().replace(/\s+/g, '-')}`,
            link: `/post/${slug}`,
            date: date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            readTime: readTime || '5 min read',
            image: image || 'https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/601e9824945d83f018fd3180_Main%20Post%20Image%203.png',
            content,
            slug,
        });

        return NextResponse.json({
            status: 'success',
            payload: newPost,
        });
    } catch (error: any) {
        if (error.code === 11000) {
            return NextResponse.json({ error: 'Post with this title/slug already exists' }, { status: 400 });
        }
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

