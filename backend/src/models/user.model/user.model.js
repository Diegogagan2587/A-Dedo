import mongoose from "mongoose";

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const saltRounds = 10;


const userSchema = new mongoose.Schema({
    name: {
        Type: String,
        require: true
    },
    surname: {
        Type: String,
        require: true
        
    },
    username: {
        Type: String,
        require: true,
        unique: true
    },
    password: {
        Type: String,
        require: true
    },
    rol: [
        {
            Type: String,
            require: true
        }
    ],
    phone: {
        Type: String,
        require: true
    },
    history_trip:[
        {
            Type: mongoose.Schema.Types.ObjectId,
            ref: "Trip"
        }
    ],
    messages:[
        {
            Type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        }
    ],
    calification: [
        {
            Type: Number
        }
    ]
});

// guarda la contraseña nueva o modificada
userSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        
        const document = this;

        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
            if(err){
                next(err);

            }else{
                document.password = hashedPassword;
                next();
            }
        });

    }else{
        next();
    }
});

// valida el password
userSchema.method.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);

        }else{
            callback(err, same)
        }

    });

}

export default mongoose.model("User", userSchema);