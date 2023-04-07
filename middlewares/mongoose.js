import mongoose from "mongoose"

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res)
  }
  await mongoose.set('strictQuery', false)
  mongoose.connect(process.env.MONGO_URL, () => {
    console.log('Connected to MongoDB')
  })
  return handler(req, res)
}

export default connectDb
