const { v4: uuidv4 } = require("uuid");
const HttpErreur = require("../models/http-erreur");

const Etudiant = require("../models/etudiant");
const Stage = require("../models/stage");

const ETUDIANTS = [];

const getEtudiantById = async (requete, reponse, next) => {
  const etudiantId = requete.params.etudiantId;
  let etudiant;
  try {
    etudiant = await Etudiant.findById(etudiantId);
  } catch (err) {
    return next(new HttpErreur("Erreur lors de la récupération de l'étudiant", 500));
  }
  if (!etudiant) {
    return next(new HttpErreur("Aucun étudiant trouvée pour l'id fourni", 404));
  }
  reponse.json({ etudiant: etudiant.toObject({ getters: true }) });
};

const getEtudiants = async (requete, reponse, next) => {
  let etudiants;

  try {
    etudiants = await Etudiant.find({}, "-motDePasse");
  } catch {
    return next(new HttpErreur("Erreur accès etudiant"), 500);
  }

  reponse.json({
    etudiants: etudiants.map((etudiant) =>
      etudiant.toObject({ getters: true })
    ),
  });
};

const getEtudiantsById = async (requete, reponse, next) => {
  let etudiants;

  try {
    etudiants = await Etudiant.find({}, "-motDePasse");
  } catch {
    return next(new HttpErreur("Erreur accès etudiant"), 500);
  }

  reponse.json({
    etudiants: etudiants.map((etudiant) =>
      etudiant.toObject({ getters: true })
    ),
  });
};

const inscription = async (requete, reponse, next) => {
  const { DA, nom, courriel, profil } = requete.body;

  let etudiantExiste;

  try {
    etudiantExiste = await Etudiant.findOne({ courriel: courriel });
  } catch {
    return next(new HttpErreur("Échec vérification etudiant existe", 500));
  }

  if (etudiantExiste) {
    return next(
      new HttpErreur("l'étudiant existe déjà, veuillez vos connecter", 422)
    );
  }

  let nouveletudiant = new Etudiant({
    DA,
    nom,
    courriel,
    profil,
    stagesPostule: [],
    stage: undefined,
  });
  try {
    await nouveletudiant.save();
  } catch (err) {
    console.log(err);
    return next(new HttpErreur("Erreur lors de l'ajout de l'étudiant", 422));
  }
  reponse
    .status(201)
    .json({ etudiant: nouveletudiant.toObject({ getter: true }) });
};

const updateEtudiant = async (requete, reponse, next) => {
  const { DA, nom, courriel, profil } = requete.body;
  const etudiantId = requete.params.etudiantId;

  let etudiant;

  try {
    etudiant = await Etudiant.findById(etudiantId);
    etudiant.DA = DA;
    etudiant.nom = nom;
    etudiant.courriel = courriel;
    etudiant.profil = profil;
    await etudiant.save();
  } catch (err) {
    console.log(err);
    return next(new HttpErreur("Erreur lors de l'ajout de l'étudiant", 422));
  }
  reponse.status(201).json({ etudiant: etudiant.toObject({ getter: true }) });
};

const assignerStage = async (requete, reponse, next) => {
  const { idStage } = requete.body;
  const etudiantId = requete.params.etudiantId;

  let etudiant;
  let stage;

  try {
    etudiant = await Etudiant.findById(etudiantId);
    console.log(etudiant)
    stage = await Stage.findById(idStage);
    console.log(stage)
    etudiant.stage = stage;
    stage.etudiants.push(etudiant)
    await etudiant.save();
    await stage.save();
  } catch (err) {
    console.log(err);
    return next(new HttpErreur("Erreur lors de l'ajout de l'étudiant", 422));
  }
  reponse.status(201).json({ etudiant: etudiant.toObject({ getter: true }) });
};

const supprimerEtudiant = async (requete, reponse, next) => {
  const etudiantId = requete.params.etudiantId;
  let etudiant;
  try {
    etudiant = await Etudiant.findById(etudiantId);
  } catch {
    return next(
      new HttpErreur("Erreur lors de la suppression de l'étudiant", 500)
    );
  }
  if (!etudiant) {
    return next(new HttpErreur("Impossible de trouver l'étudiant", 404));
  }

  try {
    await etudiant.remove();
  } catch {
    return next(
      new HttpErreur("Erreur lors de la suppression de l'étudiant'", 500)
    );
  }
  reponse.status(200).json({ message: "Etudiant supprimée" });
};

exports.getEtudiantById = getEtudiantById;
exports.getEtudiants = getEtudiants;
exports.inscription = inscription;
exports.assignerStage = assignerStage;
exports.updateEtudiant = updateEtudiant;
exports.supprimerEtudiant = supprimerEtudiant;
