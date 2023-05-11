const { v4: uuidv4 } = require("uuid");
const HttpErreur = require("../models/http-erreur");

const Employeur = require("../models/employeur");


const EMPLOYEUR = [];

const getEmployeurs = async (requete, reponse, next) => {
    let employeurs;
  
    try {
        employeurs = await Employeur.find({}, "-motDePasse");
    } catch {
      return next(new HttpErreur("Erreur accès employeur"), 500);
    }
  
    reponse.json({
        employeurs: employeurs.map((employeur) =>
        employeur.toObject({ getters: true })
      ),
    });
  };

const inscription = async (requete, reponse, next) => {
    const { nom, courriel, motDePasse } = requete.body;
  
    let employeurExiste;
  
    try {
        employeurExiste = await Employeur.findOne({ courriel: courriel });
    } catch {
      return next(new HttpErreur("Échec vérification employeur existe", 500));
    }
  
    if (employeurExiste) {
      return next(
        new HttpErreur("Employeur existe déjà, veuillez vos connecter", 422)
      );
    }
  
    let nouvelEmployeur = new Employeur({
      nom,
      courriel,
      motDePasse,
      stageCreer: []
    });
    try {
      await nouvelEmployeur.save();
    } catch (err) {
      console.log(err);
      return next(new HttpErreur("Erreur lors de l'ajout de l'utilisateur", 422));
    }
    reponse
      .status(201)
      .json({ employeur: nouvelEmployeur.toObject({ getter: true }) });
};

const connexion = async (requete, reponse, next) => {
    const { courriel, motDePasse } = requete.body;
  
    let employeurExiste;
  
    try {
        employeurExiste = await Employeur.findOne({ courriel: courriel });
    } catch {
      return next(
        new HttpErreur("Connexion échouée, veuillez réessayer plus tard", 500)
      );
    }
  
    if (!employeurExiste || employeurExiste.motDePasse !== motDePasse) {
      return next(new HttpErreur("Courriel ou mot de passe incorrect", 401));
    }
  
    reponse.json({
      message: "connexion réussie!",
      employeur: employeurExiste.toObject({ getters: true }),
    });
  };





exports.getEmployeurs = getEmployeurs;
exports.inscription = inscription;
exports.connexion = connexion;