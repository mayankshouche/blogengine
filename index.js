import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes/routes'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.port || 3030;
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0-jvrqe.mongodb.net/test?retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.error('Could not connect to mongoDB.'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

routes(app);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
