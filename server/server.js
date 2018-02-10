import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'

mongoose.connect(
    'mongodb://admin:admin@ds229448.mlab.com:29448/ders_chat-dev', 
    () => {
    console.log('Connected to mongodb...');
});

const server = express();

//Middleware goes here
server.use(bodyParser.json());

server.use('/api', routes);

export default server;