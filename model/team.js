const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
   name : String,
   designation : String,
   image : String,
   email : String,
   contact : String,
   isStudentBody : Boolean
});

module.exports = mongoose.model('teams', teamSchema);