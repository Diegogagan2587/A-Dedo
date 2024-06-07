import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    origin: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        date: { type: Date, required: true },
        time: { type: String, required: true }
    },
    destination: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        date: { type: Date, required: true },
        time: { type: String, required: true }
    },
    seats: { type: Number, required: true },
    price: { type: Number, required: true },
    stops: { type: Boolean, required: true },
    pets: { type: Boolean, required: true },
    childrens: { type: Boolean, required: true },
    acceptFood: { type: Boolean, required: true },
    notes: { type: String, required: false },
    passengers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages_trip: [
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

export default mongoose.model("Trip", tripSchema);
