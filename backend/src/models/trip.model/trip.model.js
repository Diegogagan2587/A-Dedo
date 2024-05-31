import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    destination_point: {
        Type: String,
        require: true
    },

    starting_point: {
        Type: String,
        require: true

    },

    description: {
        Type: String,
        require: false
    },

    date_publication: {
        Type: Date,
        require: true
    },

    date_start_trip: {
        Type: Date,
        require: true
    },

    ocupation: [
        {
            Type: mongoose.Schema.Types.ObjectId,
            require:false,
            ref: "User"
        }
    ],

    messages_trip: [
        {
            Type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        }

    ],

    calification:[
        {
            Type: Number
        }
    ]

    
    
});

export default mongoose.model("Trip", tripSchema);