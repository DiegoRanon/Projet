const express = require("express");

const controleursStage = require("../controllers/stage-controleurs")
const router = express.Router();

router.get("/:stageId", controleursStage.getStageById);

router.get("/", controleursStage.getStages)

router.post('/ajouterStage', controleursStage.creerStage);

router.patch('/:stageId', controleursStage.updateStage);

router.delete('/:stageId', controleursStage.supprimerStage);


module.exports = router;
