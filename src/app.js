/* eslint-disable no-undef */
const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const controllers = require("./controllers/index.js");

const app = express();

app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main"
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(controllers);

app.listen(app.get("port"), () =>
  console.log(`Server is up on port: ${app.get('port')}`)
);

module.exports = app;