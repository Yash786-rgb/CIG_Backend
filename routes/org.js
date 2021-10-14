const express = require("express");
const router = express.Router();
var Org = require("../model/org");
router.post("/",(req,res)=>{
    console.log("backend req for submitForm");
    var Obj = req.body;
    Obj.date = new Date().toLocaleDateString();

    // console.log("data at backend", Obj);

    Org.create(Obj).then(()=>{
        console.log("stored in db");
    });
    res.send("data received");
})
module.exports = router;