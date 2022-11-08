const router = require('express').Router();

router.get("/", (req, res) => {
  res.send("<h1>render all post</h2>");
});

router.post("/", (req, res) => {
  res.send("<h1>post method</h2>");
});

router.put("/", (req, res) => {
  res.send("<h1>put method</h2>");
});
router.delete("/", (req, res) => {
  res.send("<h1>delete method</h2>");
});

module.exports = router;