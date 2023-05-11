const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const HttpErreur = require("../models/http-erreur");

const Stage = require("../models/stage");
const Employeur = require("../models/employeur");

const getStageById = async (requete, reponse, next) => {
  const stageId = requete.params.stageId;
  let stage;
  try {
    stage = await Stage.findById(stageId);
  } catch (err) {
    return next(new HttpErreur("Erreur lors de la récupération du stage", 500));
  }
  if (!stage) {
    return next(new HttpErreur("Aucun stage trouvée pour l'id fourni", 404));
  }
  reponse.json({ stage: stage.toObject({ getters: true }) });
};

const getStagesByUserId = async (requete, reponse, next) => {
  const employeurId = requete.params.employeurId;

  let stages;
  try {
    let employeur = await Employeur.findById(employeurId).populate("stages");

    stages = employeur.stages;
    console.log(employeur);

    //stages = await stage.find({ createur: employeurId });
  } catch (err) {
    return next(
      new HttpErreur(
        "Erreur lors de la récupération des stages de l'employeur",
        500
      )
    );
  }

  if (!stages || stages.length === 0) {
    return next(
      new HttpErreur("Aucune stage trouvé pour l'employeur fourni", 404)
    );
  }

  reponse.json({
    stages: stages.map((stage) => stage.toObject({ getters: true })),
  });
};

const creerStage = async (requete, reponse, next) => {
  const { titre, description, adresse, createur } = requete.body;
  const nouvelleStage = new Stage({
    titre,
    description,
    adresse,
    image:
      "https://www.cmontmorency.qc.ca/wp-content/uploads/images/college/Porte_1_juin_2017-1024x683.jpg",
    createur,
  });

  let employeur;

  try {
    employeur = await employeur.findById(createur);
  } catch {
    return next(new HttpErreur("Création de stage échouée", 500));
  }

  if (!employeur) {
    return next(new HttpErreur("employeur non trouvé selon le id"), 504);
  }

  try {
    await nouvelleStage.save();
    employeur.stagesCreer.push(nouvelleStage);
    await employeur.save();
  } catch (err) {
    const erreur = new HttpErreur("Création de stage échouée", 500);
    return next(erreur);
  }
  reponse.status(201).json({ stage: nouvellestage });
};

const updateStage = async (requete, reponse, next) => {
  const { titre, description } = requete.body;
  const stageId = requete.params.stageId;

  let stage;

  try {
    stage = await stage.findById(stageId);
    stage.titre = titre;
    stage.description = description;
    await stage.save();
  } catch {
    return next(
      new HttpErreur("Erreur lors de la mise à jour de la stage", 500)
    );
  }

  reponse.status(200).json({ stage: stage.toObject({ getters: true }) });
};

const supprimerStage = async (requete, reponse, next) => {
  const stageId = requete.params.stageId;
  let stage;
  try {
    stage = await stage.findById(stageId).populate("createur");
  } catch {
    return next(
      new HttpErreur("Erreur lors de la suppression de la stage", 500)
    );
  }
  if (!stage) {
    return next(new HttpErreur("Impossible de trouver la stage", 404));
  }

  try {
    await stage.remove();
    stage.createur.stages.pull(stage);
    await stage.createur.save();
  } catch {
    return next(
      new HttpErreur("Erreur lors de la suppression de la stage", 500)
    );
  }
  reponse.status(200).json({ message: "stage supprimée" });
};

exports.getStageById = getStageById;
exports.getStagesByUserId = getStagesByUserId;
exports.creerStage = creerStage;
exports.updateStage = updateStage;
exports.supprimerStage = supprimerStage;
