import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    rol: [
        {
            type: String,
            require: true
        }
    ],
    phone: {
        type: String,
        require: true
    },
    history_trip:[
        {
            type: mongoose.Schema.types.ObjectId,
            ref: "Trip"
        }
    ],
    messages:[
        {
            type: mongoose.Schema.types.ObjectId,
            ref: "Message"
        }
    ],
    calification: [
        {
            type: Number
        }
    ]
});

export default mongoose.model("User", userSchema);