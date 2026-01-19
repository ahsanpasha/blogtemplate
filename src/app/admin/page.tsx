"use client";
import { useState } from 'react';
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
                setMessage({ type: 'success', text: 'Post added successfully!' });
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
        <div className="section" style={{ minHeight: '100vh', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="block-content" style={{ width: '100%', padding: '20px 0' }}>
                <div className="admin-container" style={{
                    maxWidth: '550px',
                    margin: '0 auto',
                    background: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.05)'
                }}>
                    <div className="section-title-line" style={{ marginBottom: '35px', textAlign: 'center' }}>
                        <div className="category-line" style={{ margin: '0 auto 10px' }}></div>
                        <h1 className="section-title" style={{ fontSize: '28px' }}>Admin Dashboard</h1>
                        <p style={{ color: '#666', marginTop: '8px', fontSize: '14px' }}>Add a new story to the blog</p>
                    </div>

                    {message.text && (
                        <div style={{
                            padding: '12px 15px',
                            borderRadius: '10px',
                            marginBottom: '25px',
                            fontSize: '14px',
                            backgroundColor: message.type === 'success' ? '#e6f4ea' : '#fce8e6',
                            color: message.type === 'success' ? '#1e7e34' : '#d93025',
                            border: `1px solid ${message.type === 'success' ? '#ceead6' : '#fad2cf'}`,
                            textAlign: 'center'
                        }}>
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="admin-form">
                        <div style={{ marginBottom: '18px' }}>
                            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '14px', color: '#333' }}>Post Title</label>
                            <input
                                type="text"
                                required
                                className="footer-text-field w-input"
                                placeholder="Enter post title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '10px',
                                    color: '#000',
                                    fontSize: '15px'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '18px' }}>
                            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '14px', color: '#333' }}>Category</label>
                            <select
                                className="footer-text-field w-input"
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '10px',
                                    background: 'white',
                                    color: '#000',
                                    fontSize: '15px',
                                    cursor: 'pointer'
                                }}
                            >
                                <option value="Travel" style={{ color: '#000' }}>Travel</option>
                                <option value="Food" style={{ color: '#000' }}>Food</option>
                                <option value="Off Grid" style={{ color: '#000' }}>Off Grid</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '18px' }}>
                            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '14px', color: '#333' }}>Image URL</label>
                            <input
                                type="text"
                                className="footer-text-field w-input"
                                placeholder="https://example.com/image.jpg"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '10px',
                                    color: '#000',
                                    fontSize: '15px'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '14px', color: '#333' }}>Post Content</label>
                            <textarea
                                required
                                className="footer-text-field w-input"
                                placeholder="Write your blog content here..."
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                style={{
                                    width: '100%',
                                    minHeight: '160px',
                                    padding: '12px 16px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '10px',
                                    resize: 'vertical',
                                    color: '#000',
                                    fontSize: '15px',
                                    lineHeight: '1.6'
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="submit-button-2 w-button"
                            style={{
                                width: '100%',
                                padding: '14px',
                                background: '#343641',
                                color: 'white',
                                border: 'none',
                                borderRadius: '10px',
                                fontWeight: '600',
                                fontSize: '16px',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                opacity: loading ? 0.7 : 1,
                                transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)'
                            }}
                        >
                            {loading ? 'Publishing...' : 'Publish Post'}
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>{`
                .submit-button-2:hover {
                    background: #ff5a5f !important;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(255, 90, 95, 0.3);
                }
            `}</style>
        </div>
    );
}
