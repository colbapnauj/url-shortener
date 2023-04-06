import express from 'express';
import connectDB  from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

connectDB();

import indexRouter from './routes/index.js';
import urlsRouter from './routes/url.js';


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api/url', urlsRouter);
app.use('/api/customurl', urlsRouter);

// Server Setup
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
