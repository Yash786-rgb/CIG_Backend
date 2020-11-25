const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    date : String,
    heading : String,
    content : String
})
module.exports = mongoose.model("Event",eventSchema);