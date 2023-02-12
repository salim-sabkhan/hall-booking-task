import mongoose from 'mongoose';
// const { Schema } = mongoose;

const HallSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      distance: {
        type: String,
        required: true,
      },
      photos: {
        type: [String],
      },
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        min: 0,
        max: 5,
      },
      rooms: {
        type: [String],
      },
      cheapestPrice: {
        type: Number,
        required: true,
      },
      featured: {
        type: Boolean,
        default: false,
      },
    });
    
    export default mongoose.model("Hall", HallSchema)


    // 63e5f0f39466ae792828f2ca
    // "_id": "63e5f0f39466ae792828f2ca"
    // "_id": "63e5f28d6d5612f52b98a4de"
    // "_id": "63e5f3786d5612f52b98a4e0"