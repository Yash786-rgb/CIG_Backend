const express = require("express");
function Recruit(val){
    console.log("val is : ",val);
    var router = express.Router();
   router.get("/",(req,res)=>{
       res.send(val);
   })
   return router;
}
module.exports = Recruit;