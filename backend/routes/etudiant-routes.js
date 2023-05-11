const express = require("express");

const controleursEtudiant= require("../controllers/etudiant-controlleurs")
const router = express.Router();


router.get("/", controleursEtudiant.getEtudiants);

router.post("/inscription", controleursEtudiant.inscription)

router.post("/connexion", controleursEtudiant.connexion)

module.exports = router;