const express =require('express');
const router= express.Router();
const Dean_Chaiperson = require("../model/Dean_Chairperson");
// Dean_Chaiperson.create({
//       dean : {name : "Prof Akshay Dwivedi",
//                   contact : "0133228548"},
//          chairPerson : {name : "Saksham Singh",
//                          contact : "9687489894" }
// })

router.get("/",(req,res,next)=>{
    console.log("req for dean & chairperson at backend");
    Dean_Chaiperson.find({},(err,found)=>{
      if(err){
        console.log("err");
        console.log(err);
      }else{
        res.send(found);
        console.log("dean & chaiperson sent from backend");
      }
    })
  })
module.exports = router;