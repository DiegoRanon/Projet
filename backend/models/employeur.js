const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const employeurSchema = new Schema({
    nom: {type: String, required: true, unique:true},
    courriel: {type: String, required: true, minLength: 6},
    motDepasse: {type: String, required: true, minLength: 6}
});



module.exports = mongoose.model("Employeur", employeurSchema);