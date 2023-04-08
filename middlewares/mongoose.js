import mongoose from "mongoose"

const connectDb = (handler) => async (req, res) => {

  if (mongoose.connections[0].readyState) {
    return
  }
  await mongoose.set('strictQuery', true)
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.jrjaw5z.mongodb.net/test')

}

export default connectDb
