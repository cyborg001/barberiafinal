import mongoose from 'mongoose';

let mongoDB = 'mongodb://localhost:27017/barbershop';
mongoose.connect(mongoDB);
let Schema = mongoose.Schema;
let personaSchema = new Schema({
  nombre:{type: String, required: true, unique: true},
  telefono:String

});
module.exports = mongoose.model('Persona', personaSchema);
