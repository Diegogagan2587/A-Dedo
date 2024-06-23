import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      makeAndModel: {
        type: String,
        required: true
      }
})

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
