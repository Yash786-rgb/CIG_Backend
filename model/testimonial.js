const mongoose = require("mongoose");
const testimonialSchema = new mongoose.Schema({
    heading : String,
    content : String,
    image : String,
    name : String,
    designation : String 
});
module.exports = mongoose.model("Testimonial",testimonialSchema);