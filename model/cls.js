const mongoose = require('mongoose');

const clsSchema = mongoose.Schema({
  date : String,
  name : String,
  companyIcon : String,
  img : String,
  heading : String,
  designation : String,
});

module.exports = mongoose.model('Cls', clsSchema);