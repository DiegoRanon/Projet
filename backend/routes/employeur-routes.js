const express = require("express");

const controleursEmployeur = require("../controllers/employeur-controlleurs")
const router = express.Router();


router.get("/", controleursEmployeur.getEmployeurs);

router.post("/inscription", controleursEmployeur.inscription)

router.post("/connexion", controleursEmployeur.connexion)

module.exports = router;
