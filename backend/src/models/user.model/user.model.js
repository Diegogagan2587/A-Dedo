import mongoose from "mongoose";

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const saltRounds = 10;


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
        
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: [
        {
            type: String,
            required: true
        }
    ],
    phone: {
        type: String,
        required: true
    },
    history_trip: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Trip"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        }
    ],
    calification: [
        {
            type: Number
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
