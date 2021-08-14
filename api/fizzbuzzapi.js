const router = require("express").Router();
var fizzBuzzService = require("../services").fizzBuzzService;

router.get("/fizzbuzz", (req, res) => {
  res.send({
    type: "success",
    message: "generated Fizzbuzz",
    fizzbuzz: fizzBuzzService.fizzBuzz(req.query.count),
  });
});

module.exports = router;
