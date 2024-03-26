const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controls")

router.route("/contact").post(contactForm);

module.exports=router;