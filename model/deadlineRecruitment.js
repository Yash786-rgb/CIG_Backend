const mongoose = require("mongoose");
const deadlineSchema = new mongoose.Schema({
    date : String,
    type : String
})
module.exports = mongoose.model("Deadline",deadlineSchema);