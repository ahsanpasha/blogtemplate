"use client";
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Post } from '@/data/posts';

export default function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const router = useRouter();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await fetch(`/api/posts/${slug}`);
                const data = await response.json();
                if (data.status === 'success') {
                    setPost(data.payload);
                }
            } catch (error) {
                console.error('Failed to fetch post:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchPost();
    }, [slug]);

    if (loading) {
        return <div className="section" style={{ padding: '100px 0', textAlign: 'center' }}><h3>Loading post...</h3></div>;
    }

    if (!post) {
        return (
            <div className="section">
                <div className="block-content top-bot-margin" style={{ textAlign: 'center', padding: '100px 0' }}>
                    <h2>Post Not Found</h2>
                    <Link href="/" className="read-more" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="section">
            <div className="block-content top-bot-margin">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="back-button"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '40px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: '#343641'
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back
                </button>

                <div className="post-detail-header">
                    <div className="category-block">
                        <div className="category-line"></div>
                        <Link href={post.categoryLink} className="post-category" style={{ textDecoration: 'none' }}>{post.category}</Link>
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '48px', margin: '20px 0', lineHeight: '1.1' }}>{post.title}</h1>
                    <div className="date-time-block" style={{ marginBottom: '40px' }}>
                        <div className="post-date">{post.date}</div>
                        <div className="dot">•</div>
                        <div className="read-time">{post.readTime}</div>
                    </div>
                </div>

                <div className="post-detail-image-block" style={{ marginBottom: '60px' }}>
                    <img
                        src={post.image}
                        alt={post.title}
                        style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
                    />
                </div>

                <div className="post-detail-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p className="paragraph" style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '30px', whiteSpace: 'pre-wrap' }}>
                        {post.content}
                    </p>
                </div>
            </div>

            <style jsx>{`
        .back-button:hover {
          color: #ff5a5f !important;
        }
        @media screen and (max-width: 767px) {
          .hero-title {
            font-size: 32px !important;
          }
        }
      `}</style>
        </div>
    );
}
