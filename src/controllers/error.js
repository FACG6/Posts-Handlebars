exports.client = (req, res) => {
  res.status(404).render("error", {
    layout: "error",
    statusCode: 404,
    message: "Page Not Found"
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render("error", {
    layout: "error",
    statusCode: 500,
    message: "Internal Server Error"
  });
};
