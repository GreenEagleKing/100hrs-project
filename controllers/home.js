const Product = require("../models/Product");

module.exports = {

    getIndex: async (req, res) => {
      try {
        const products = await Product.find().sort({ createdAt: "desc" }).lean();
        res.render("index.ejs", { products: products, user: req.user});
      } catch (err) {
        console.log(err);
      }
  }
}