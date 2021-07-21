var express = require("express");
var router = express.Router();
router.get("/contentDev",(req,res)=>{
    res.download("./public/pdfs/Content Dev Recruitment.pdf");
})

router.get("/design",(req,res)=>{
    res.download("./public/pdfs/Design recuitment.pdf");
})

router.get("/events",(req,res)=>{
    res.download("./public/pdfs/Events Recruitment.pdf");
})
router.get("/webDev",(req,res)=>{
    res.download("./public/pdfs/Web dev recuitment.pdf");
})
module.exports = router;