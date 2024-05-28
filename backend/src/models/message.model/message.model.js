import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: {
        Type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
        index: true,
    },
    receiver: [
        {
            Type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "User",
        }
    ],
    content:{
        Type: String,
        require:true
    }
});

export default mongoose.model("Message", messageSchema);