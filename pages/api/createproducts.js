import connectDb from "../../middlewares/mongoose"
import Product from "../../model/product"

const handler = async (req, res) => {
  const request = JSON.parse(req.body)
  if (req.method === "POST") {
    let product = await Product.create(request)
    res.status(200).json({ product: product })
  } else {
    res.status(404).json({ success: "error" })
  }
}

export default connectDb(handler)
