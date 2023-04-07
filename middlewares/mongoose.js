import mongoose from "mongoose"

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    console.log("Connecting")
    return handler(req, res)
  }
  console.log(mongoose.connections[0].readyState)

  await mongoose.set('strictQuery', false)
  mongoose.connect('mongodb+srv://admin:admin@cluster0.jrjaw5z.mongodb.net/test', () => {
    console.log('Connected to MongoDB', process.env.MONGO_URL)
  })
  return handler(req, res)
}

export default connectDb
