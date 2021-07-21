const mongoose = require("mongoose");
var workshopSchema = new mongoose.Schema({
    numOfWorkshop : String,
    numOfLecturesAndSeminars : String
})
module.exports = mongoose.model("Workshop",workshopSchema);