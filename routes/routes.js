import { postSchema } from '../schema/Post';
import mongoose from 'mongoose';
import { createPost, findAllPosts } from '../controllers/postController';

const routes = (app) => {
    app.route('/createPost')
    .post(createPost);

    app.route('/')
    .get(findAllPosts);
}

export default routes;