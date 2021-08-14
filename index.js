const express = require("express");
const FizzBuzzMiddleware = require("./helpers").FizzBuzzMiddleware;

const app = express();

// application level middleware
app.use(FizzBuzzMiddleware.logger);
app.use(FizzBuzzMiddleware.validate);

const port = 8000;

app.use(require("./api"));

// default url will load fizzbuzz for count 100
app.get("/", (req, res) => {
  res.redirect("api/fizzbuzz?count=100");
});

app.all("*", function (req, res) {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`FizzBuzz app listening on port ${port}!`);
});

module.exports = app;
