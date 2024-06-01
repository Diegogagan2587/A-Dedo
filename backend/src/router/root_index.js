import { Router } from 'express';
import { allPath } from '../controllers/errors/errorsController.js';

export const root_index = Router();

// Import Controllers
import { default as users_controller }  from '../controllers/usersController.js';
import { default as trips_controller } from '../controllers/tripsController.js'
import { default as messages_controller } from "../controllers/messagesController.js"

// user
root_index.use('/user', users_controller);

// trip
root_index.use('/trip', trips_controller);

// message
root_index.use('/message', messages_controller);


//errors
root_index.get('*/', allPath);
