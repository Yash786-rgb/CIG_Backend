var express = require("express");
var router =  express.Router();
var Workshop = require("../model/workshop");
// Workshop.create({
//     numOfWorkshop : "50",
//     numOfLecturesAndSeminars : "50"
// })
router.get("/",(req,res)=>{
    console.log("request for workshop at backend");
    Workshop.find({},(err,found)=>{
        if(err){
            console.log(err);
        }else{
            res.send(found);
            console.log("workshops and lectures sent to frontend");
        }
    })
})
module.exports = router;