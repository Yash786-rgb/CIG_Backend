var express = require("express");
var router = express.Router();
var Faq = require("../model/faq");

// Faq.create({
//     question : "Can I apply for more than one profile?",
//     ans : "Yes"
// })

// Faq.create({
//     question : "I don’t have experience in certain profile should I apply?",
//     ans :"Being a group of intensive team work, you can always learn and develop more interest in any profile. Also, we all work across other verticals to generate requisite output."
// })

// Faq.create({
//     question : "What's the requirement to be a member?",
//     ans : "Nothing but the zeal to learn and thrust to work as a team."
// })

// Faq.create({
//     question : "What is the goal of this group?",
//     ans : "To facilitate the collaboration and bridging the gap between Corporate and Academia so that both can benefit."
// })

// Faq.create({
//     question : "How does this group affect my portfolio?",
//     ans : "With CIG, you will be able to gain first-hand work-experience by constructively contributing along with Deans, Professors and Industrial Assets. "
// })

// Faq.create({
//     question : "What are the events and activities conducted by CIG?",
//     ans : "We conduct Corporate lecture series, research talks and research fundamental workshops to enhance research culture of iitr."
// })

router.get("/",(req,res,next)=>{
    console.log("req for faq at backend");
    Faq.find({},(err,found)=>{
      if(err){
        console.log("err");
        console.log(err);
      }else{
        res.send(found);
        console.log("faq sent from backend");
      }
    })
  })

module.exports = router;