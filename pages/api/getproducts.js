import connectDb from "../../middlewares/mongoose"
import Products from "../../model/product"

const handler = async (req, res) => {
  if (req.method === "GET") {
    console.log(req.body)
    let products = await Products.find({})
    res.status(200).json({ products: products })
  } else {
    res.status(404).json({ success: "error" })
  }
}

export default connectDb(handler)
