import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
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
            required: false
        }
    ],
    phone: {
        type: String,
        required: true
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: false,
      },
    history_trip: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Trip",
            required: false
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            required: false
        }
    ],
    calification: [
        {
            type: Number,
            required: false
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

const User = mongoose.model("User", userSchema);
export  default User;
