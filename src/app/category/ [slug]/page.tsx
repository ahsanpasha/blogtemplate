"use client";
import { use } from 'react';
import Link from 'next/link';
import { posts } from '@/data/posts';

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    // Format slug to displayable category name
    const categoryName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // Filter posts by category
    // Note: We need to handle the case normalization
    const filteredPosts = posts.filter(post =>
        post.category.toLowerCase().replace(' ', '-') === slug.toLowerCase()
    );

    return (
        <div className="section">
            <div className="block-content top-bot-margin">
                <div className="section-title-line">
                    <div className="category-line"></div>
                    <h1 className="section-title" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#999', marginBottom: '5px' }}>Category</h1>
                    <h2 className="section-title" style={{ marginTop: '0' }}>{categoryName}</h2>
                    <div className="red-line-small"></div>
                    <div className="black-line-big"></div>
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="all-posts-grid" style={{ marginTop: '40px' }}>
                        <div className="w-dyn-list">
                            <div role="list" className="all-post-collection-list w-dyn-items" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                                {filteredPosts.map((post) => (
                                    <div role="listitem" className="w-dyn-item" key={post.id}>
                                        <div className="post-block">
                                            <Link href={post.link} className="post-image-block-link all-posts-block w-inline-block">
                                                <img src={post.image} loading="lazy" alt={post.title} className="post-image" />
                                            </Link>
                                            <div className="post-info-block-small">
                                                <Link href={post.categoryLink} className="category-block w-inline-block">
                                                    <div className="category-line"></div>
                                                    <div className="post-category">{post.category}</div>
                                                </Link>
                                                <Link href={post.link} className="title-link-block w-inline-block">
                                                    <h3 className="post-title h4">{post.title}</h3>
                                                </Link>
                                                <div className="date-time-block">
                                                    <div className="post-date">{post.date}</div>
                                                    <div className="dot">•</div>
                                                    <div className="read-time">{post.readTime}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div style={{ padding: '80px 0', textAlign: 'center' }}>
                        <h3>No posts found in this category.</h3>
                        <Link href="/" className="read-more" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Home</Link>
                    </div>
                )}
            </div>

            <style jsx>{`
        @media screen and (max-width: 767px) {
          .all-post-collection-list {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}
