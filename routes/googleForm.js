const express =require('express');
const router= express.Router();
const GoogleForm = require("../model/googleForm");
const URL = "https://docs.google.com/forms/d/e/1FAIpQLSexdiBnnc56kC8YrYQ1kWsoHHG9CEeBVYsj1oyNl476DIjlMQ/viewform?usp=sf_link";
// GoogleForm.create({
//     link : URL,
//     type : "webDev"
// })

// GoogleForm.create({
//     link : URL,
//     type : "contentDev"
// })

// GoogleForm.create({
//     link : URL,
//     type : "events"
// })

// GoogleForm.create({
//     link : URL,
//     type : "design"
// })


router.get("/",(req,res,next)=>{
    console.log("req for cls at backend");
    GoogleForm.find({},(err,found)=>{
      if(err){
        console.log("err");
        console.log(err);
      }else{
        res.send(found);
        console.log("google Form link sent from backend");
      }
    })
  })
  
module.exports = router;