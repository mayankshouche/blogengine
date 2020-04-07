import { postSchema } from '../schema/Post';
import mongoose from 'mongoose';
import { createPost, findAllPosts, findPost } from '../controllers/postController';

const routes = (app) => {
    app.route('/createPost')
    .post(createPost);

    app.route('/')
    .get(findAllPosts);

    app.route('/:postID')
    .get(findPost);
}

export default routes;