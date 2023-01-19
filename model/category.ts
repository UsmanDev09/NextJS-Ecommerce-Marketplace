
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  products: [{ type: Schema.Types.ObjectId, ref: 'product', index: true }],
}, {timestamps: true})

mongoose.models = {}

export default mongoose.model('Category', CategorySchema)
