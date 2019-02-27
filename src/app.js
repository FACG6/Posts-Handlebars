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
<<<<<<< HEAD
app.use(cookieParser());
=======
>>>>>>> 9bf8e2100c69bf48d0a38c7565d5c7766c2e904f
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(controllers);

app.listen(app.get("port"), () =>
<<<<<<< HEAD
  console.log(`Server is up on port: ${app.get("port")}`)
);

module.exports = app;
=======
  console.log(`Server is up on port: ${app.get('port')}`)
);

module.exports = app;
>>>>>>> 9bf8e2100c69bf48d0a38c7565d5c7766c2e904f
