import connectDb from '../../middlewares/mongoose';
import Category from '../../model/category';
import Product from '../../model/product';

const handler = async (req, res) => {
  const request = JSON.parse(req.body);
  if (req.method === 'PUT') {
    let category = await Category.find({ name: request.categoryName });
    let product = await Product.create({
      name: request.name,
      price: request.price,
      description: request.description,
      rating: request.rating,
      image: request.image,
    });
    let updateCategory = await Category.findOneAndUpdate(
      { name: request.categoryName },
      { $push: { products: product } }
    );
    res.status(200).json({ product: product, category: updateCategory });
  } else {
    res.status(404).json({ success: 'error' });
  }
};

export default connectDb(handler);
