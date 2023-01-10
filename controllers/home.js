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

postLogin = (req, res, next) => {
  console.log(req.body.email)
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/profile");
    });
  })(req, res, next);
};