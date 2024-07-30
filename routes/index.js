const express = require("express");
const router = express.Router();

// Sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const { message, user } = req.body;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
