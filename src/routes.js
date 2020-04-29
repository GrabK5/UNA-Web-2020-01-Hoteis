import { Router } from 'express';
// const { Router } = require('express');
import SessionController from './controllers/SessionController';
import HotelsController from './controllers/HotelsController';
import ReservationsController from './controllers/ReservationsController';

const routes =  new Router();

routes.post('/sessions', SessionController.store);

routes.get('/hotels', HotelsController.index); //index
routes.get('/hotels/:id', HotelsController.show); //show
routes.put('/hotels/:id', HotelsController.update); //update
routes.post('/hotels', HotelsController.store); //store
routes.delete('/hotels/:id', HotelsController.destroy); //destroy

routes.get('/reservations', ReservationsController.index); //index
routes.get('/reservations/:id', ReservationsController.show); //show
routes.put('/reservations/:id', ReservationsController.update); //update
routes.post('/reservations', ReservationsController.store); //store
routes.delete('/reservations/:id', ReservationsController.destroy); //destroy


routes.get('/', (req, res) => {
    return res.json({
        resposta: false,
    })
});

export default routes;