const express = require("express");
const router = express.Router();
const Ft = require("../model/featured");
var URL = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";


// var content1 = "Technology workshop on “Advanced Embedded Technology” presented by the eminent personalities, who are from the largest overseas R&D Centre of Samsung Electronics, Samsung Research Institute, Bangalore (SRI-B). This event is being conducted by the joint efforts of the CSE department and the CIG"
// Ft.create({
//     heading : "Samsung Workshop",
//     content : content1,
//     icon : "/images/samsungWorkshop.png"
// })

// var content2 = "Shrishti is an annual event of IIT Roorkee where students from various technical groups and sections showcase their work to the other students and Faculty of IIT Rookee. CIG invited many eminent personalities from Corporate World to Shrishti, some of them include Aditya Birla Group, Maruti Suzuki etc."
// Ft.create({
//     heading : "Shrishti 2019",
//     content : content2,
//     icon : "/images/ShrishtiWorkshop.png"
// })



// var content3 = "IIT Roorkee in collaboration with Indian Space Research Organisation(ISRO) organized a full day workshop on Space Technology on 7th April 2018.The focus of the workshop was mainly on ‘Bhuvan’, an online geoportal which provides image and map visualization with data download and versatile viewing capabilities.CIG invited four eminent speakers from the National Remote Sensing Centre (NRSC), ISRO"
// Ft.create({
//     heading : "Workshop On Space Technology",
//     content : content3,
//     icon : "/images/IsroWorkshop.png"
// })
router.get("/",(req,res)=>{
    console.log("feature request at backend");
    Ft.find({},(err,found)=>{
        if(err){
            console.log(err);
        }else{
            res.send(found);
            console.log("Feature send from backend");
        }
    })
})
module.exports = router;