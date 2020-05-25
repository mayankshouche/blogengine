import { postSchema } from '../schema/Post';
import mongoose from 'mongoose';
import { createPost, findAllPosts, findPost } from '../controllers/postController';

const routes = (app) => {
    app.route('/api/createPost')
    .post(createPost);

    app.route('/api/')
    .get(findAllPosts);

    app.route('/api/:postID')
    .get(findPost);
}

export default routes;