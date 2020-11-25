const mongoose = require("mongoose");
const orgSchema = new mongoose.Schema({
   name : String,
   corporation : String,
   email : String,
   phone : String,
   interest : [String],
   message : String
})
module.exports = mongoose.model("Org",orgSchema);