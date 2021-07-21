const mongoose = require("mongoose");
const featureSchema = new mongoose.Schema({
    heading : String,
    content : String,
    icon : String
})
module.exports = mongoose.model("Ft",featureSchema);