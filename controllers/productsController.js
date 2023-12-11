const getAllProducts = async (req, res) => {
  try {
    const products = [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 200,
      },
    ];
    return res.send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {getAllProducts};