import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
        index: true,
    },
    receiver: [
        {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "User",
        }
    ],
    content:{
        type: String,
        require:true
    }
});

export default mongoose.model("Message", messageSchema);