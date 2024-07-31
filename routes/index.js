const express = require("express");
const router = express.Router();

// Sample messages
const messages = [
  {
    text: "Hello World!",
    user: "Charles (Leclerc)",
    added: new Date("2024-07-31T15:30:00Z"), // Custom date
  },
  {
    text: "I am a completely real message.",
    user: "Fernando Alonso",
    added: new Date("2024-07-31T12:00:00Z"), // Custom date
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
  messages.unshift({ text: message, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
