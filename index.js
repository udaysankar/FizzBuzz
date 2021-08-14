const express = require("express");
const FizzBuzzMiddleware = require("./helpers").FizzBuzzMiddleware;

const app = express();

// application level middleware
app.use(FizzBuzzMiddleware.logger);
app.use(FizzBuzzMiddleware.validate);

app.use(require("./api"));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports = app;
