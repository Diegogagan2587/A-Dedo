import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import { URI_CONNECTION_DB_ATLAS, URI_CONNECTION_DB_LOCAL } from "../../config/config.js";
import { connectMongoDB } from "../db/connection.js";

const app = express();

const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

//Conexion a Mongodb
const mongo_uri = URI_CONNECTION_DB_LOCAL || URI_CONNECTION_DB_ATLAS;

connectMongoDB(mongo_uri)


app.post('/authenticate', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err) {
            res.status(500).send('ERROR AL AUTENTICAR USUARIO');

        } else if (!user) {
            res.status(500).send('EL USUARIO NO EXISTE');

        } else {
            user.isCorrectPassword(password, (err, result) => {
                if (err) {
                    res.status(500).send('ERROR AL AUTENTICAR');

                } else if (result) {
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');

                } else {
                    res.status(500).send('USUARIO Y/O  CONTRASEÑA INCORRECTA');
                }
            })
        }
    })

});

app.listen(port, () => {
    console.log('Server Started');
    console.log(`Port: http://localhost:${port}`)

});

export default app;