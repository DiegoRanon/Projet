const express = require("express");

const controleursEtudiant= require("../controllers/etudiant-controlleurs")
const router = express.Router();


router.get("/:etudiantId", controleursEtudiant.getEtudiantById);

router.get("/", controleursEtudiant.getEtudiants)

router.post("/inscription", controleursEtudiant.inscription)

router.patch("/assignerStage/:etudiantId", controleursEtudiant.assignerStage);

router.patch("/:etudiantId", controleursEtudiant.updateEtudiant);

router.delete("/:etudiantId", controleursEtudiant.supprimerEtudiant)

module.exports = router;