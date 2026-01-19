import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        console.log('=== Blog Post API Route Called ===');
        await dbConnect();
        console.log('Database connected successfully');

        const { slug } = await params;
        console.log('Looking for post with slug:', slug);

        const post = await Post.findOne({ slug });
        console.log('Post found:', post ? 'Yes' : 'No');

        if (post) {
            console.log('Post details:', { title: post.title, slug: post.slug });
        }

        if (!post) {
            console.log('Post not found, returning 404');
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json({
            status: 'success',
            payload: post,
        });
    } catch (error: any) {
        console.error('Error in blog post API:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
