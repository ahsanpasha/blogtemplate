import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import { posts } from '@/data/posts';

export async function GET() {
    try {
        await dbConnect();

        // Clear existing posts
        await Post.deleteMany({});

        // Prepare posts for MongoDB
        const postsWithSlug = [
            {
                title: "Hello from MongoDB!",
                category: "Travel",
                categoryLink: "/travel",
                link: "/post/hello-from-mongodb",
                date: "January 19, 2026",
                readTime: "1 min read",
                image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/601e9824945d83f018fd3180_Main%20Post%20Image%203.png",
                content: "Ji haan! Ye post ab seedha MongoDB database se aa rahi hai. Humne implementation successful kar li hai.",
                slug: "hello-from-mongodb"
            },
            ...posts.map(post => ({
                ...post,
                slug: post.link.split('/').pop() || '',
            }))
        ];

        // Inset new posts
        const createdPosts = await Post.insertMany(postsWithSlug);

        return NextResponse.json({
            message: 'Database seeded successfully',
            count: createdPosts.length,
            posts: createdPosts,
        });
    } catch (error: any) {
        console.error('Seeding Error:', error);
        return NextResponse.json({
            error: error.message,
            stack: error.stack,
            cause: error.cause
        }, { status: 500 });
    }
}
