const router = require('express').Router();

router.get("/login", (req, res) => {
  res.send("<h1>This is login Page.</h2>");
});

router.get("/logout", (req, res) => {
  res.send("<h1>This is logout Page.</h2>");
});

router.get("/signup", (req, res) => {
  res.send("<h1>This is signup Page.</h2>");
});

module.exports = router;