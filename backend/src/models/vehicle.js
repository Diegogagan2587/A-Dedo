import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    domain: {
        Type: String,
        require: true,
        index: true,
    },
    color: {
        Type: String,
        require: false
    },
    type_vehicle: {
        Type: String,
        require: false
    },
    occupation: {
        Type: Number,
        require: true
    },
    occupants:[
        {
            Type: mongoose.Schema.Types.ObjectId,
            require:false,
            ref: "User",
        }
    ],
    calification_driver: [
        {
            Type: mongoose.Schema.Types.ObjectId,
            require:false,
            ref: "Trip",
        }
    ]
})

export default mongoose.model("Vehicle", vehicleSchema);