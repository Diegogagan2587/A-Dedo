import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      makeAndModel: {
        type: String,
        required: true
      }
})

export default mongoose.model("Vehicle", vehicleSchema);