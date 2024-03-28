const express = require("express")
const router = express.Router();
const {home,register, codecheck, emailcheck,login, detailscheck,user} = require("../controllers/auth-controls")
const validate = require("../middlewares/validate-middleware");
const {emailSchema, detailsSchema} = require("../validators/auth-validator")
const checkToken = require("../middlewares/auth-middleware");

router.route("/").get(home);
router.route("/register").post(register);
router.route("/codecheck").post(codecheck);
router.route("/detailscheck").post(validate(detailsSchema),detailscheck);
router.route("/emailcheck").post(validate(emailSchema),emailcheck);
router.route("/login").post(login);
router.route("/getuser").get(checkToken,user);

module.exports = router;