const express = require("express")
const router = express.Router();
const {home,register, codecheck, emailcheck,login} = require("../controllers/auth-controls")

router.route("/").get(home);
router.route("/register").post(register);
router.route("/codecheck").get(codecheck);
router.route("/emailcheck").post(emailcheck);
router.route("/login").post(login);

module.exports = router;