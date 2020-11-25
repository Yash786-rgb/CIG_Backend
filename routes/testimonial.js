const express = require("express");
const router = express.Router();
var Testimonial = require("../model/testimonial");
// Testimonial.create({
//     heading : "Director's message",
//     content : "test_testimonial_director_content",
//     image : "/images/IITR_Director.png",
//     name : " Dr. Ajit Kumar Chaturvedi",
//     designation : "Director, IIT Roorkee" 
// })

// var testContent2 = "My time at CIG has been a wonderful journey. I got great exposure to many things involving industry, research, and academia. I got a chance to work with the IIT Roorkee administration - particularly SRIC office. I had the pleasure to meet and work with some really great self-motivated people who formed the CIG team."

// Testimonial.create({
//     heading : "Alum's message",
//     content : testContent2,
//     image : "/images/Abhishek%20Jain.png",
//     name : "Abhishek Jain",
//     designation : "Alumni" 
// })


// var testContent3 = "My journey from a volunteer to the chairperson of the group started when I worked as a volunteer for my first event “Big boom” on the campus. After that, I officially joined this group as a designer. I think not only our CIG group but any group in IITR is not just a group it’s a family and CIG was that family who helped me to overcome my own insecurity, anxiety, and fear. CIG gave me an opportunity to prove myself."

// Testimonial.create({
//     heading : "Alum's message",
//     content : testContent3,
//     image : "/images/Meghraj%20Bhoyar.png",
//     name : "Meghraj Bhoyar",
//     designation : "Alumni" 
// })

router.get("/",(req,res)=>{
    console.log("testimonial backend request");
    Testimonial.find({},(err,found)=>{
        if(err){
            console.log(err);
        }else{
            console.log("testimonial send from backend");
            res.send(found);
        }
    })
})
module.exports = router;