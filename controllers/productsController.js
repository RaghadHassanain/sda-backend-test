const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.send({
      message: "All products",
      products: products,
    })
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {getAllProducts};