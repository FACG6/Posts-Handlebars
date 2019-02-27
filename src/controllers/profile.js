const getPosts = require("./../model/getPosts.js");
exports.get = (req, res, next) => {
  getPosts()
    .then(result => {
      res.render("home", { posts: result.rows, css: "profile" });
    })
    .catch(err => {
      next(err);
    });
};
