const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const etudiantSchema = new Schema({
    DA:{type: String, required: true},
    nom: {type: String, required: true, unique:true},
    courriel: {type: String, required: true, minLength: 6},
    profil: {type: String, required: true},
    stagesPostule: [{type: mongoose.Types.ObjectId, required: true, ref:"Stage"}],
    stage: {type: mongoose.Types.ObjectId, required: false, ref:"Stage"}
});



module.exports = mongoose.model("Etudiant", etudiantSchema);