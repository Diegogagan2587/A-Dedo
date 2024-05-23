import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        Type: String,
        require: true
    },
    surname: {
        Type: String,
        require: true
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
    ]
});

export default mongoose.model("User", userSchema);