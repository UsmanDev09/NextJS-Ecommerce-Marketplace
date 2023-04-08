import mongoose from "mongoose"

const connectDb = (handler) => async (req, res) => {
    console.log('Connecting', mongoose.connections[0].readyState)

  if (mongoose.connections[0].readyState) {
    console.log("Connected")
    return
  }
  await mongoose.set('strictQuery', true)
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.jrjaw5z.mongodb.net/test')
  console.log('Connected to MongoDB and returning handler')

}

export default connectDb
