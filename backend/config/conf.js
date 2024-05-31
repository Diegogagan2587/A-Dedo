import dotenv from "dotenv";
dotenv.config();

import UserModel from "../src/models/user.model/user.model.js";
import TripModel from "../src/models/trip.model/trip.model.js";
import MessageModel from "../src/models/message.model/message.model.js";

export const {
    PORT,
    URI_CONNECTION_DB_LOCAL,
    URI_CONNECTION_DB_ATLAS,
} = process.env


export const models = {
    UserModel,
    TripModel,
    MessageModel
}