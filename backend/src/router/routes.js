import { Router } from 'express';
import { allPath } from '../controllers/errors/errorsController.js';

export const routes = Router();

// Import Controllers
import usersController from '../controllers/usersController.js';
import tripsController  from '../controllers/tripsController.js'
import { default as messages_controller } from "../controllers/messagesController.js"

// user
routes.post('/register', usersController.register);
routes.post('/authenticate', usersController.authenticate);

// trip
routes.post('/trip/create', tripsController.create);

// message
routes.use('/message', messages_controller);


//errors
routes.get('*/', allPath);
