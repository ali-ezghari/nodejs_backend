const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Users Router Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("Users home page");
});
router.get("/:id", (req, res) => {
  res.send(`User profile for ID: ${req.params.id}`);
});

module.exports = router;
