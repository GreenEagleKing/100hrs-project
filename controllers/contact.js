module.exports = {
    getContact: (req, res) => {
      res.render("contact.ejs", {user: req.user});
    },
  };