import { Router } from "express";
import { trip_router } from "./trip/trip.router.js";
import { user_router } from "./users/users.router.js";
import { message_router } from "./message/message.router.js";
import { allPath } from "../controller/errors/error.router.js";

export const root_index = Router();


// message
root_index.use('/message', message_router);

// user
root_index.use('/user', user_router);

// trip
root_index.use('/trip', trip_router);

//errors
root_index.get('*/', allPath);