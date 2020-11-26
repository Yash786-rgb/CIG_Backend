const mongoose = require("mongoose");
const googleFormSchema = new mongoose.Schema({
    link : String,
    type : String
})
module.exports = mongoose.model("GoogleForm",googleFormSchema);