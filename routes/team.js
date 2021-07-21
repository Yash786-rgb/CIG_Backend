const express =require('express');
const router= express.Router();
const Team = require("../model/team");
//  creating student Body
// Team.create({
//   name : "Abhyuday Mishra",
//   designation : "Chairperson",
//   image : "/images/Abhyuday%20Mishra.png",
//   email : "amishra3@ch.iitr.ac.in",
//   contact : "9560284667",
//   isStudentBody : true
// })

// Team.create({
//   name : "Souradipta Ganguly",
//   designation : "Vice-Chairperson",
//   image : "/images/Souradipta%20Ganguly.png",
//   email : "souradiptagang@gmail.com",
//   contact : "9867186036",
//   isStudentBody : true
// })

// Team.create({
//   name : "Zaid Bin Junaid",
//   designation : "Head of Web Development",
//   image : "/images/Zaid%20Bin%20Junaid.png",
//   email : "zaidjunaid3@gmail.com",
//   contact : "7300912106",
//   isStudentBody : true
// })

// Team.create({
//   name : "Anurag Mukherjee",
//   designation : "Head of New Connections",
//   image : "/images/Anurag%20Mukherjee.png",
//   email : "amukerjee@es.iitr.ac.in",
//   contact : "9068521481",
//   isStudentBody : true
// })



// Team.create({
//   name : "Rishabh Sharma",
//   designation : "Head of Content and Design",
//   image : "/images/Anurag%20Mukherjee.png",
//   email : "rsharma1@me.iitr.ac.in",
//   contact : "9582886628",
//   isStudentBody : true
// })


// Team.create({
//   name : "Saurav Sangam",
//   designation : "Head of on campus activities",
//   image : "/images/Saurav%20Sangam.png",
//   email : "ssangam@ee.iitr.ac.in",
//   contact : "7319987253",
//   isStudentBody : true
// })

// Team.create({
//   name : "Yash Agrawal",
//   designation : "Executive Member",
//   image : "/images/Yash%20Agrawal.png",
//   email : "yagrawal@ch.iitr.ac.in",
//   contact : "9680790435",
//   isStudentBody : true
// })


// Team.create({
//   name : "Nipun Bhagat",
//   designation : "Executive Member",
//   image : "/images/Nipun%20Bhagat.png",
//   email : "nbhagat@ee.iitr.ac.in",
//   contact : "9682622919",
//   isStudentBody : true
// })


// Team.create({
//   name : "Aryan",
//   designation : "Executive Member",
//   image : "/images/Nipun%20Bhagat.png",
//   email : "araj1@ee.iitr.ac.in",
//   contact : "9068511351",
//   isStudentBody : true
// })


// Team.create({
//   name : "Prabhakar Aryan",
//   designation : "Mentor and Executive Member",
//   image : "/images/Nipun%20Bhagat.png",
//   email : "pkumar@ch.iitr.ac.in",
//   contact : "7481978181",
//   isStudentBody : true
// })


// Team.create({
//   name : "Rahul Kumar",
//   designation : "Mentor and Executive Member",
//   image : "/images/Nipun%20Bhagat.png",
//   email : "rkumar@ee.iitr.ac.in",
//   contact : "9460560257",
//   isStudentBody : true
// })

// Team.create({
//   name : "Aman Kumar",
//   designation : "Mentor and Executive Member",
//   image : "/images/Nipun%20Bhagat.png",
//   email : "aman.kumarbbn@gmail.com",
//   contact : "9123404137",
//   isStudentBody : true
// })


// Team.create({
//   name : "Ayush Dixit",
//   designation : "Mentor and Executive Member",
//   image : "/images/Ayush%20Dixit.png",
//   email : "adixit@me.iitr.ac.in",
//   contact : "9479340436",
//   isStudentBody : true
// })

// Team.create({
//   name : "Himanshu Tripathi",
//   designation : "Mentor and Executive Member",
//   image : "/images/Ayush%20Dixit.png",
//   email : "adixit@me.iitr.ac.in",
//   contact : "9829748703",
//   isStudentBody : true
// })

// Team.create({
//   name : "Rohit Poonia",
//   designation : "Mentor and Executive Member",
//   image : "/images/Ayush%20Dixit.png",
//   email : "rohit@mt.iitr.ac.in",
//   contact : "7300219613",
//   isStudentBody : true
// })


// creating admin body

// Team.create({
//   name : "Prof. Akshay Dwivedi",
//   designation : "Associate Dean of Corporate Interactions (ADCI)",
//   image : "/images/Prof.%20Akshay%20Dwivedi.png",
//   email : "adci@iitr.ac.in",
//   contact : "+91-1332-285378",
//   isStudentBody : false
// })

// Team.create({
//   name : "Prof.Ajit Kumar Chaturvedi",
//   designation : "Director",
//   image : "/images/IITR_Director.png",
//   email : "director@iitr.ac.in",
//   contact : "NA",
//   isStudentBody : false
// })


// Team.create({
//   name : "Prof. Manish Shrikhande",
//   designation : "Dean Sponsored Research & Industrial Consultancy",
//   image : "/images/Prof.%20Manish%20Shrikhande.png",
//   email : "dsric@iitr.ac.in",
//   contact : "+91-1332-285245",
//   isStudentBody : false
// })




router.get("/studentBody",(req,res)=>{
  console.log("backend req for student Body");
  Team.find({isStudentBody : true},(err,found)=>{
    if(err){
      console.log(err);
    }else{
      res.send(found);
      console.log("student Body Sent");
    }
  })
})
router.get("/adminBody",(req,res)=>{
  console.log("backend req for admin Body");
  Team.find({isStudentBody : false},(err,found)=>{
    if(err){
      console.log(err);
    }else{
      res.send(found);
      console.log("Admin Body Sent");
    }
  })
})
// router.get('/', (req, res, next) => {

//  Team.find().then(

//  	(team)=>{ console.log(team)
//     res.status(200).json(team); }
//  	).catch(
//  	(err)=>{res.status(200).json({err:err}); }
//  	);

//  	});


// router.post("/product", (req, res, next) => {
// 	console.log(req.body)
// Product.create({name:req.body.name
// 	,price:req.body.price}).then(
// (product)=> {console.log(product);
//  res.status(200).json({"message":"created"});}
// ).catch(
// (err)=> {console.log(err);
// res.status(200).json({"message":"err"});
// })
// });



// router.put("/product/:id", (req, res, next) => {

//  Product.update({ _id: req.params.id }, { $set: {name:"zaid bin junaid"} }).then(
//  (product)=>{
//  res.status(200).json({"message":"updated"});
//  }).catch(
// (err)=> {console.log(err);
// res.status(200).json({"message":"err"});
// })
// });



// router.get("/:productId", (req, res, next) => {
//   const id = req.params.productId;
//   Product.findById(id)
//     .exec()
//     .then(doc => {
//       console.log("From database", doc);
//       if (doc) {
//         res.status(200).json(doc);
//       } else {
//         res
//           .status(404)
//           .json({ message: "No valid entry found for provided ID" });
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });


router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});



module.exports = router;