const mongoose = require("mongoose");
const Dean_ChairpersonSchema = new mongoose.Schema({
    dean : {name : String,
            contact : String},
    chairPerson : {name : String,
        contact : String}
})
module.exports = mongoose.model("Dean_Chairperson",Dean_ChairpersonSchema);