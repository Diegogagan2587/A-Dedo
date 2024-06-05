import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    destination_point: {
        type: String,
        require: true
    },

    starting_point: {
        type: String,
        require: true

    },

    description: {
        type: String,
        require: false
    },

    date_publication: {
        type: Date,
        require: true
    },

    date_start_trip: {
        type: Date,
        require: true
    },

    ocupation: [
        {
            type: mongoose.Schema.Types.ObjectId,
            require:false,
            ref: "User"
        }
    ],

    messages_trip: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        }

    ],

    calification:[
        {
            type: Number
        }
    ]

    
    
});

export default mongoose.model("Trip", tripSchema);