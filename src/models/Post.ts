import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
    title: string;
    category: string;
    categoryLink: string;
    link: string;
    date: string;
    readTime: string;
    image: string;
    imageAlt?: string;
    isFeatured?: boolean;
    content: string;
    slug: string;
}

const PostSchema: Schema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    categoryLink: { type: String, required: true },
    link: { type: String, required: true },
    date: { type: String, required: true },
    readTime: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String },
    isFeatured: { type: Boolean, default: false },
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
}, {
    timestamps: true,
});

export default mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
