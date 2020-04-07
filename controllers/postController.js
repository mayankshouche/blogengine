import mongoose from 'mongoose';
import { postSchema } from '../schema/Post'

const Post = mongoose.model('Post', postSchema);

export const createPost = (req, res) => {
    let newPost = new Post(req.body);

    newPost.save((err, Post) => {
        if (err)
            res.send(err);
        else
            res.json(Post);
    });
}

export const findAllPosts = (req, res) => {
    Post.find((err, Posts) => {
        if (err)
            res.send(err);
        else
            res.json(Posts);
    });
}

export const findPost = (req, res) => {
    Post.findById(req.params.postID, (err, Post) => {
        if (err)
            res.send(err);
        else
            res.json(Post);
    });
}