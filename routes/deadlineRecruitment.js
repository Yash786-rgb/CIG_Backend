const express = require("express");
var router = express.Router();
var Deadline = require("../model/deadlineRecruitment");
// Deadline.create({
//   date : "10 March 2020",
//   type : "contentDev"
// })

// Deadline.create({
//   date : "10 March 2020",
//   type : "design"
// })

// Deadline.create({
//   date : "10 March 2020",
//   type : "events"
// })

// Deadline.create({
//   date : "10 March 2020",
//   type : "webDev"
// })


// ==============================
// ==========================

// Deadline.create({
//   date : "To be declared",
//   type : "contentDev"
// })

// Deadline.create({
//   date : "To be declared",
//   type : "design"
// })

// Deadline.create({
//   date : "To be declared",
//   type : "events"
// })

// Deadline.create({
//   date : "To be declared",
//   type : "webDev"
// })









router.get("/",(req,res,next)=>{
    console.log("req for deadline at backend");
    Deadline.find({},(err,found)=>{
      if(err){
        console.log("err");
        console.log(err);
      }else{
        res.send(found);
        console.log("deadline sent from backend");
      }
    })
  })
module.exports = router;