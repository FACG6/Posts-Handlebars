const getPosts = require("./../model/getPosts.js");
const { verify } = require("jsonwebtoken");
exports.get = (req, res, next) => {
  verify(req.cookies.jwt, process.env.SECRET, (err, token) => {
    if (err) res.redirect("/signin");
    else
      getPosts()
        .then(result => {
          res.render("home", { posts: result.rows, css: "profile", js: "profile" });
        })
        .catch(err => {
          next(err);
        });
  });
};
