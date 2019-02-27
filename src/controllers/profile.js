const getPosts = require("./../model/getPosts.js");
exports.get = (req, res, next) => {
  getPosts()
    .then(result => {
      res.render("home", { posts: result });
    })
    .catch(err => {
      next(err);
    });
};
