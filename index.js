import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes/routes'

const app = express();
const port = process.env.port || 3000;
const user = 'shouchem'; const password = 'aE0sGTWnfvHDXFSh';
mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-jvrqe.mongodb.net/test?retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.error('Could not connect to mongoDB.'))

app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
