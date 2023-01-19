
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
    enum: ['0', '1', '2', '3', '4', '5'],
  },
  description: {
    type: String,
  },

}, {timestamps: true})

mongoose.models = {}

export default mongoose.model('Product', ProductSchema)
