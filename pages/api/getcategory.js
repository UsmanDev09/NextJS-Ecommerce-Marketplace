import connectDb from "../../middlewares/mongoose"
import category from "../../model/category"

const handler = async (req, res) => {
  if (req.method === "GET") {
    console.log(req.body)
    let categories = await category.find({})

    res.status(200).json({ categories: categories })
  } else {
    res.status(404).json({ success: "error" })
  }
}

export default connectDb(handler)
