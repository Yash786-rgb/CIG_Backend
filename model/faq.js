const mongoose = require("mongoose");
const faqSchema = new mongoose.Schema({
    question : String,
    ans : String
});
module.exports = mongoose.model("Faq",faqSchema);