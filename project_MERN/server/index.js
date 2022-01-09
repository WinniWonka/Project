import express from 'express';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

const app = express();
app.use(cors());

app.use(express.json({limit: "20mb", extended: true}));//bodyParser are deprecated, so use express
app.use(express.urlencoded({limit: "20mb", extended: true}));
app.use('/students', studentRoutes); //The app.use(students) needs to be AFTER the express.json/urlencoded.


const CONNECTION_URL = 'mongodb+srv://projectMERN:mErn666@projectmern.30rqz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

