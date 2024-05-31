import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
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

export default mongoose.model("User", userSchema);
