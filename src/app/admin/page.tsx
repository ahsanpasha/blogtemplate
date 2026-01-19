"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [formData, setFormData] = useState({
        title: '',
        category: 'Travel',
        image: '',
        content: ''
    });

    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        setImageError(false);
    }, [formData.image]);

    const [previewSlug, setPreviewSlug] = useState('');

    useEffect(() => {
        const slug = formData.title
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
        setPreviewSlug(slug);
    }, [formData.title]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const res = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.status === 'success') {
                setMessage({ type: 'success', text: 'Post published successfully!' });
                setFormData({ title: '', category: 'Travel', image: '', content: '' });
                setTimeout(() => router.push('/'), 2000);
            } else {
                setMessage({ type: 'error', text: data.error || 'Something went wrong' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to connect to server' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-wrapper" style={{
            minHeight: '100vh',
            background: '#f0f2f5',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: "'Inter', sans-serif"
        }}>
            {/* Header */}
            <header style={{
                background: 'white',
                padding: '15px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                zIndex: 10
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div className="category-line"></div>
                    <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#333' }}>CMS Dashboard</h2>
                </div>
                <Link href="/" className="back-link" style={{ fontSize: '14px', color: '#666', textDecoration: 'none', fontWeight: '500' }}>
                    ← Back to Website
                </Link>
            </header>

            <main style={{
                display: 'flex',
                flex: 1,
                padding: '30px',
                gap: '30px',
                height: 'calc(100vh - 65px)',
                overflow: 'hidden'
            }}>
                {/* Form Section */}
                <section style={{
                    flex: '0 0 450px',
                    background: 'white',
                    borderRadius: '20px',
                    padding: '30px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                    overflowY: 'auto'
                }}>
                    <h3 style={{ marginTop: 0, marginBottom: '25px', fontSize: '22px', fontWeight: '700' }}>Create New Post</h3>

                    {message.text && (
                        <div style={{
                            padding: '12px 15px',
                            borderRadius: '10px',
                            marginBottom: '20px',
                            fontSize: '14px',
                            backgroundColor: message.type === 'success' ? '#e6f4ea' : '#fce8e6',
                            color: message.type === 'success' ? '#1e7e34' : '#d93025',
                            border: `1px solid ${message.type === 'success' ? '#ceead6' : '#fad2cf'}`
                        }}>
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Post Title</label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="e.g. My Trip to the Mountains"
                                style={{ width: '100%', padding: '14px', border: '1px solid #e0e0e0', borderRadius: '12px', fontSize: '16px', color: '#000', outline: 'none' }}
                                className="admin-input"
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Category</label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                style={{ width: '100%', padding: '14px', border: '1px solid #e0e0e0', borderRadius: '12px', fontSize: '16px', color: '#000', outline: 'none', background: 'white' }}
                                className="admin-input"
                            >
                                <option value="Travel">Travel</option>
                                <option value="Food">Food</option>
                                <option value="Off Grid">Off Grid</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Image URL</label>
                            <input
                                type="text"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                placeholder="Paste image link from Unsplash, Pixabay, etc..."
                                style={{ width: '100%', padding: '14px', border: '1px solid #e0e0e0', borderRadius: '12px', fontSize: '16px', color: '#000', outline: 'none' }}
                                className="admin-input"
                            />
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Content</label>
                            <textarea
                                required
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                placeholder="Tell your story..."
                                style={{ width: '100%', minHeight: '200px', padding: '14px', border: '1px solid #e0e0e0', borderRadius: '12px', fontSize: '16px', color: '#000', outline: 'none', resize: 'vertical', lineHeight: '1.6' }}
                                className="admin-input"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '16px',
                                background: '#343641',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                fontWeight: '700',
                                fontSize: '16px',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                            }}
                            className="publish-btn"
                        >
                            {loading ? 'Publishing...' : 'Publish Post'}
                        </button>
                    </form>
                </section>

                {/* Preview Section */}
                <section style={{
                    flex: 1,
                    background: '#fff',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                    overflow: 'hidden'
                }}>
                    <div style={{ padding: '15px 25px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fafafa' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#999', textTransform: 'uppercase' }}>Live Preview</span>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></div>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></div>
                        </div>
                    </div>

                    <div style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '40px',
                        background: 'white'
                    }}>
                        <div className="preview-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                <div className="category-line"></div>
                                <span style={{ fontWeight: '700', textTransform: 'uppercase', color: '#343641', fontSize: '14px' }}>
                                    {formData.category}
                                </span>
                            </div>

                            <h1 style={{ fontSize: '42px', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px', color: '#343641' }}>
                                {formData.title || 'Untitled Post'}
                            </h1>

                            <div style={{ display: 'flex', gap: '15px', color: '#666', fontSize: '14px', marginBottom: '30px' }}>
                                <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div>

                            <div style={{
                                width: '100%',
                                height: formData.image ? 'auto' : '300px',
                                background: '#f8f9fa',
                                borderRadius: '15px',
                                marginBottom: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                border: '1px dashed #ddd',
                                position: 'relative'
                            }}>
                                {formData.image && !imageError ? (
                                    <img
                                        src={formData.image}
                                        alt="Preview"
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                        onError={() => setImageError(true)}
                                        crossOrigin="anonymous"
                                    />
                                ) : (
                                    <div style={{ color: imageError ? '#d93025' : '#999', textAlign: 'center' }}>
                                        {imageError ? (
                                            <div style={{ fontWeight: '600' }}>Invalid Image URL</div>
                                        ) : (
                                            <>
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ marginBottom: '10px', opacity: 0.5 }}>
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                                    <polyline points="21 15 16 10 5 21"></polyline>
                                                </svg>
                                                <div style={{ fontSize: '14px' }}>Image Preview Area</div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#444',
                                whiteSpace: 'pre-wrap'
                            }}>
                                {formData.content || 'Your content will appear here...'}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .admin-input:focus {
                    border-color: #343641 !important;
                    background: #fafafa;
                }
                .publish-btn:hover {
                    background: #ff5a5f !important;
                    transform: translateY(-2px);
                }
                @media (max-width: 1000px) {
                    main {
                        flex-direction: column !important;
                        overflow-y: auto !important;
                        height: auto !important;
                    }
                    section {
                        flex: none !important;
                        width: 100% !important;
                    }
                }
            `}</style>
        </div>
    );
}
