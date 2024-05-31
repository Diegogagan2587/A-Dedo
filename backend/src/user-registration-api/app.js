import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/user.model/user.model.js";
import { URI_CONNECTION_DB_ATLAS, URI_CONNECTION_DB_LOCAL } from "../../config/conf.js";
import { connectMongoDB } from "../db/connection.js";

const app = express();

const port = 3000; 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

//Conexion a Mongodb

const mongo_uri = 'mongodb://localhost:27017/adedo'

mongoose.connect(mongo_uri, function(err){
    if (err){
        throw err;
    }else {
        console.log('Successfully connected to ${mongo_uri}');
    }
});

app.post('/register', (req, res) => {
    const {email, password} = req.body;

    const user = new user({email, password});

    user.save(err => {
        if(err){
            res.status(500).send('ERROR AL REGISTRAR USUARIO');

        }else{
            res.status(200).send('USUARIO REGISTRADO');

        }
    });

});

app.post('/authenticate', (req, res) => {
    const {email, password} = req.body;

    user.findOne({email}, (err, user) =>{
        if(err){
            res.status(500).send('ERROR AL AUTENTICAR USUARIO');

        }else if(!user){
            res.status(500).send('EL USUARIO NO EXISTE');

        }else{
            user.isCorrectPassword(password, (err, result) =>{
                if(err){
                    res.status(500).send('ERROR AL AUTENTICAR');

                }else if(result){
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');

                }else{
                    res.status(500).send('USUARIO Y/O  CONTRASEÑA INCORRECTA');
                }
            })
        }
    })

});

app.listen(3000, () => {
    console.log('Server Started');
    
});

export default app;