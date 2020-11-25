const express = require("express");
const router = express.Router();
var Org = require("../model/org");
router.post("/",(req,res)=>{
    console.log("backend req for submitForm");
    console.log(req.body);
    Org.create(req.body).then(()=>{
        console.log("stored in db");
    });
    res.send("data received");
})
module.exports = router;