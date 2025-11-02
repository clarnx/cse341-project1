const router = require("express").Router();
const contacts = require("./contacts");

router.get("/", (req, res) => res.send("Hello world"));

router.use("/contacts", contacts);

module.exports = router;
