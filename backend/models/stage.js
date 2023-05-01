const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stageSchema = new Schema({
    nom:{type: String, required: true},
    courriel: {type: String, required: true},
    numeroTel: {type: String, required: true},
    nomEntreprise: {type: String, required: true},
    adresseEntreprise:{type: String, required: true},
    typeStage:{type: String, required: true},
    nombreDePostesDispo:{type: String, required: true},
    descriptionStage:{type: String, required: true},
    remuneration:{type: String, required: true},
    etudiants:[{type: mongoose.Types.ObjectId, required: true, ref:"Etudiant"}]

});

module.exports = mongoose.model("Stage", stageSchema);