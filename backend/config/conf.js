import dotenv from "dotenv";
dotenv.config();

import UserModel from "../src/models/user.js";
import TripModel from "../src/models/trip.js";
import MessageModel from "../src/models/message.js";

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