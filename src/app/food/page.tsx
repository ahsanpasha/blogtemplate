"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Post } from '@/data/posts';
import PageLoader from '@/components/PageLoader';

export default function FoodPage() {
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('/api/posts?category=Food');
                const data = await response.json();
                if (data.status === 'success') {
                    setFilteredPosts(data.payload);
                }
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (loading) {
        return <PageLoader />;
    }

    return (
        <div className="section">
            <div className="block-content top-bot-margin">
                <div className="section-title-line">
                    <div className="category-line"></div>
                    <h1 className="section-title">Delicious Food</h1>
                    <div className="red-line-small"></div>
                    <div className="black-line-big"></div>
                </div>

                <p className="paragraph" style={{ maxWidth: '600px', marginBottom: '40px' }}>
                    Savor the flavors of home and travel. From healthy granola bars to creative ways
                    to stretch ingredients, discover recipes and stories that celebrate good food.
                </p>

                <div className="all-posts-grid">
                    <div className="w-dyn-list">
                        <div role="list" className="all-post-collection-list w-dyn-items" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                            {filteredPosts.map((post) => (
                                <div role="listitem" className="w-dyn-item" key={post.id}>
                                    <div className="post-block">
                                        <Link href={post.link} className="post-image-block-link all-posts-block w-inline-block">
                                            <img src={post.image} loading="lazy" alt={post.title} className="post-image" />
                                        </Link>
                                        <div className="post-info-block-small">
                                            <div className="category-block">
                                                <div className="category-line"></div>
                                                <div className="post-category">{post.category}</div>
                                            </div>
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
