import { Router } from 'express';
import { allPath } from '../controllers/errors/errorsController.js';

export const routes = Router();

// Import Controllers
import { default as users_controller }  from '../controllers/usersController.js';
import { default as trips_controller } from '../controllers/tripsController.js'
import { default as messages_controller } from "../controllers/messagesController.js"

// user
routes.use('/user', users_controller);

// trip
routes.use('/trip', trips_controller);

// message
routes.use('/message', messages_controller);


//errors
routes.get('*/', allPath);
