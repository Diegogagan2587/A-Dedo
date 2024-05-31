const express = require('express');
const path = require('path');
const bodyParse = require('body-parse');
const app = express();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const user = require('./user');

const port = 3000; 


app.use(bodyParse.jason());
app.use(bodyParse.urlencoded({extended: false}));

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
    const {username, password} = req.body;

    const user = new user({username, password});

    user.save(err => {
        if(err){
            res.status(500).send('ERROR AL REGISTRAR USUARIO');

        }else{
            res.status(200).send('USUARIO REGISTRADO');

        }
    });

});

app.post('/authenticate', (req, res) => {
    const {username, password} = req.body;

    user.findOne({username}, (err, user) =>{
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

module.exports = app;