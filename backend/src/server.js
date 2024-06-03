//import libraries
import express from "express";
import morgan from "morgan";

//import local
import { routes } from "./router/routes.js";
import { PORT, URI_CONNECTION_DB_LOCAL } from "../config/config.js";
import { connectMongoDB } from "./db/connection.js";

const server = express();

//config of server
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({extended:true}));
//router
server.use(routes);

//connects ORM with DB
connectMongoDB( URI_CONNECTION_DB_LOCAL || 'mongodb://localhost:27017/adedo');

//listener
server.listen(PORT,()=>{
    console.log(`Server on port: http://localhost:${PORT}`)
});