const Product = require("../models/Product");
const Newsletter = require("../models/Newsletter");
const validator = require("validator");

module.exports = {

    getIndex: async (req, res) => {
      try {
        const products = await Product.find().sort({ createdAt: "desc" }).lean();
        res.render("index.ejs", { products: products, user: req.user});
      } catch (err) {
        console.log(err);
      }
  },
  // User is added to newsletter database through a form, email is validated.
    addNewsletter: async (req, res, next) => {
      const validationErrors = [];
      
      if (!validator.isEmail(req.body.email))
      validationErrors.push({ msg: "Please enter a valid email address." });
      if (validationErrors.length) {
        req.flash("errors", validationErrors);
        return res.redirect("/");
      }
      req.body.email = validator.normalizeEmail(req.body.email, {
        gmail_remove_dots: false,
      })

      try {
        await Newsletter.create({
          email: req.body.email
        });
        console.log("The email address has been added to newsletter!");
        req.flash("success", { msg: "The email address has been added to newsletter!"});
        res.redirect('/')
      } catch (err) {
        console.log(err);
      }
    },
}