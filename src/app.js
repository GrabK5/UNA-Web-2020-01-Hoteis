import express from 'express';  // const express = require('express');
import routes from './routes'; // const routes = require('./routes');
import  mongoose from 'mongoose';

class App {
    constructor() {
        this.app = express();

        mongoose.connect('mongodb+srv://USER-01:uGZVwHs2YvClPzY2@web-20-01-hlqqi.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser:true,
            useUnfiedTopology: true,
        });

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(routes);
    }
}

export default new App().app; //module.exports = new App().app;