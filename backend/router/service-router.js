const express = require("express");
const router = express.Router();
const { packsCard } = require("../controllers/datas-controls")

router.route("/packs").get(packsCard);

module.exports = router;