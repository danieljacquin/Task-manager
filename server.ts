import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connection';
dotenv.config();
import apiRouter from './router/apiRouter';
import notFound404 from './middlewears/notFound';
import errorHandlerMiddleware from './middlewears/errorHandler';

const server = express();
const PORT = process.env.PORT || 3000;
const CONNECTION_URL = process.env.CONNECT_URL;

server.use(express.json());
server.use('/', apiRouter);
server.use(notFound404);
server.use(errorHandlerMiddleware);

const start = async() => {
    try {
        await connectDB(CONNECTION_URL);
        server.listen(PORT, () => {
            console.log(`server is running on port: ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}
start();
