const express = require("express");

const controleursStage = require("../controllers/stage-controleurs")
const router = express.Router();

router.get("/:stageId", controleursStage.getStageById);

router.get("/stage/:stageId", controleursStage.getStagesByUserId);

router.post('/', controleursStage.creerStage);

router.patch('/:stageId', controleursStage.updateStage);

router.delete('/:stageId', controleursStage.supprimerStage);


module.exports = router;
