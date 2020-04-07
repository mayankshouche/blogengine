import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const postSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        default: Date.now()
    }
});
