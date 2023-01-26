import connectDb from "../../middlewares/mongoose"
import User from "../../model/user"

const handler = async (req, res) => {
  if (req.method === "GET") {
    console.log(req.body)

    res.status(200).json({ success: req.body })
  } else {
    res.status(404).json({ success: "error" })
  }
}

export default connectDb(handler)
