module.exports = {
    getHowItWorks: (req, res) => {
      res.render("howItWorks.ejs", {user: req.user});
    },
  };