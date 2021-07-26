//const express =require('express');
//const router= express.Router();
//const Team = require("../model/team");
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




// router.get("/studentBody",(req,res)=>{
//   console.log("backend req for student Body");
//   Team.find({isStudentBody : true},(err,found)=>{
//     if(err){
//       console.log(err);
//     }else{
//       res.send(found);
//       console.log("student Body Sent");
//     }
//   })
// })
// router.get("/adminBody",(req,res)=>{
//   console.log("backend req for admin Body");
//   Team.find({isStudentBody : false},(err,found)=>{
//     if(err){
//       console.log(err);
//     }else{
//       res.send(found);
//       console.log("Admin Body Sent");
//     }
//   })
// })
// // router.get('/', (req, res, next) => {

// //  Team.find().then(

// //  	(team)=>{ console.log(team)
// //     res.status(200).json(team); }
// //  	).catch(
// //  	(err)=>{res.status(200).json({err:err}); }
// //  	);

// //  	});


// // router.post("/product", (req, res, next) => {
// // 	console.log(req.body)
// // Product.create({name:req.body.name
// // 	,price:req.body.price}).then(
// // (product)=> {console.log(product);
// //  res.status(200).json({"message":"created"});}
// // ).catch(
// // (err)=> {console.log(err);
// // res.status(200).json({"message":"err"});
// // })
// // });



// // router.put("/product/:id", (req, res, next) => {

// //  Product.update({ _id: req.params.id }, { $set: {name:"zaid bin junaid"} }).then(
// //  (product)=>{
// //  res.status(200).json({"message":"updated"});
// //  }).catch(
// // (err)=> {console.log(err);
// // res.status(200).json({"message":"err"});
// // })
// // });



// // router.get("/:productId", (req, res, next) => {
// //   const id = req.params.productId;
// //   Product.findById(id)
// //     .exec()
// //     .then(doc => {
// //       console.log("From database", doc);
// //       if (doc) {
// //         res.status(200).json(doc);
// //       } else {
// //         res
// //           .status(404)
// //           .json({ message: "No valid entry found for provided ID" });
// //       }
// //     })
// //     .catch(err => {
// //       console.log(err);
// //       res.status(500).json({ error: err });
// //     });
// // });


// router.delete("/:productId", (req, res, next) => {
//   const id = req.params.productId;
//   Product.remove({ _id: id })
//     .exec()
//     .then(result => {
//       res.status(200).json(result);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });



// module.exports = router;
======================================================
  
  
======================================================
  
  
 const express =require('express');
const router= express.Router();
const Team = require("../model/team");

//  creating student Body

// Team.create({
//   name : "Saksham Singh",
//   designation : "Chairperson",
//   image : "/images/Saksham Singh.png",
//   email : "saksham_s@pp.iitr.ac.in",
//   contact : "9687489894",
//   linkedin : "https://www.linkedin.com/in/saksham-singh-a73208192/",
//   isStudentBody : true
// })


// Team.create({
//   name : "Aditi Rani",
//   designation : "Vice Chairperson",
//   image : "/images/Aditi Rani.png",
//   email : "aditirani01@gmail.com",
//   contact : "8219837760",
//   linkedin : "/www.linkedin.com/in/aditirani/",
//   isStudentBody : true
// })


// Team.create({
//   name : "Yash Agrawal",
//   designation : "Web Development Head",
//   image : "/images/Yash%20Agrawal.png",
//   email : "yagrawal@ch.iitr.ac.in",
//   contact : "9680790435",
//   linkedin : "NA",
//   isStudentBody : true
// })

// Team.create({
//   name : "Mahir Goel",
//   designation : "Head of on campus activities",
//   image : "/images/Mahir Goel.png",
//   email : "mahir_g@me.iitr.ac.in",
//   contact : "7060437352",
//   linkedin : "https://www.linkedin.com/in/mahir-goel-28484b198",
//   isStudentBody : true
// })


// Team.create({
//   name : "Pranjal Naithani",
//   designation : "Head of New Connections, Head of Content",
//   image : "/images/Pranjal Naithani.png",
//   email : "pranjal_n@ar.iitr.ac.in",
//   contact : "7060746212",
//   linkedin : "https://www.linkedin.com/in/pranjal-naithani-31278618b",
//   isStudentBody : true
// })


// ==========================================



// Team.create({
//   name : "Abhyuday Mishra",
//   designation : "Mentor",
//   image : "/images/Abhyuday%20Mishra.png",
//   email : "amishra3@ch.iitr.ac.in",
//   contact : "9560284667",
//   isStudentBody : true
// })


// Team.create({
//   name : "Souradipta Ganguly",
//   designation : "Mentor",
//   image : "/images/Souradipta%20Ganguly.png",
//   email : "souradiptagang@gmail.com",
//   contact : "9867186036",
//   isStudentBody : true
// })


// Team.create({
//   name : "Anurag Mukherjee",
//   designation : "Mentor",
//   image : "/images/Anurag%20Mukherjee.png",
//   email : "amukerjee@es.iitr.ac.in",
//   contact : "9068521481",
//   isStudentBody : true
// })


// Team.create({
//   name : "Rishabh Sharma",
//   designation : "Mentor",
//   image : "/images/Anurag%20Mukherjee.png",
//   email : "rsharma1@me.iitr.ac.in",
//   contact : "9582886628",
//   isStudentBody : true
// })


// Team.create({
//   name : "Saurav Sangam",
//   designation : "Mentor",
//   image : "/images/Saurav%20Sangam.png",
//   email : "ssangam@ee.iitr.ac.in",
//   contact : "7319987253",
//   isStudentBody : true
// })


// ===============================================================
// executive members

// Team.create({
//   name : "Dheeraj Chouhan",
//   designation : "Executive Member",
//   image : "/images/Dheeraj Chouhan.png",
//   email : "dheeraj_c@ce.iitr.ac.in",
//   contact : "9772881641",
//   linkedin: "https://www.linkedin.com/in/dheeraj-chouhan-287319200",
//   isStudentBody : true
// })

// Team.create({
//   name : "Rahul Ketan Modi",
//   designation : "Executive member",
//   image : "/images/Rahul Ketan Modi.png",
//   email : "rahul_km@ee.iitr.ac.in",
//   contact : "6353937210",
//   linkedin: "www.linkedin.com/in/rahul-modi-131008",
//   isStudentBody : true
// })

// Team.create({
//   name : "Abhishek Adhikari",
//   designation : "Executive member",
//   image : "/images/Abhishek Adhikari.png",
//   email : "abhishek_a@ce.iitr.ac.in",
//   contact : "8630591840",
//   linkedin: "www.linkedin.com/in/abhishek-adhikari1",
//   isStudentBody : true
// })


// Team.create({
//   name : "Ritesh Kumar Gupta",
//   designation : "Executive member",
//   image : "/images/Ritesh Kumar Gupta.png",
//   email : "ritesh_kg@ee.iitr.ac.in",
//   contact : "9995536652",
//   linkedin: "https://www.linkedin.com/in/ritesh-kumar-gupta-a44525213/",
//   isStudentBody : true
// })


// Team.create({
//   name : "Kushagra Agarwal",
//   designation : "Executive member",
//   image : "/images/Kushagra Agarwal.png",
//   email : "kushagra_a@ce.iitr.ac.in",
//   contact : "9983433934",
//   linkedin: "https://www.linkedin.com/in/kushagra-agarwal-915450200",
//   isStudentBody : true
// })


// Team.create({
//   name : "Aman Vishwakarma",
//   designation : "Executive member",
//   image : "/images/Aman Vishwakarma.png",
//   email : "aman_v@ce.iitr.ac.in",
//   contact : "9569802087",
//   linkedin: "https://www.linkedin.com/in/aman-vishwakarma-30a9031bb",
//   isStudentBody : true
// })

// Team.create({
//   name : "Tasin Mukarram",
//   designation : "Executive member",
//   image : "/images/Tasin Mukarram.png",
//   email : "tasin_m@me.iitr.ac.in",
//   contact : "8107033697",
//   linkedin: "NA",
//   isStudentBody : true
// })

// Team.create({
//   name : "Omprakash Kuldeep",
//   designation : "Executive member",
//   image : "/images/Omprakash Kuldeep.png",
//   email : "omprakash_k@ce.iitr.ac.in",
//   contact : "9351753674",
//   linkedin: "https://www.linkedin.com/in/omprakash-kuldeep-ba74701a7",
//   isStudentBody : true
// })


// Team.create({
//   name : "Rohith Varma Buddaraju",
//   designation : "Executive member",
//   image : "/images/Rohith Varma Buddaraju.png",
//   email : "rohith_vb@ece.iitr.ac.in",
//   contact : "9600380226",
//   linkedin: "https://www.linkedin.com/in/rohith-varma-buddaraju",
//   isStudentBody : true
// })


// Team.create({
//   name : "Fajarudheen Pullaratt",
//   designation : "Executive member",
//   image : "/images/Fajarudheen Pullaratt.png",
//   email : "fajarudheenvzr@gmail.com",
//   contact : "9539249246",
//   linkedin: "https://www.linkedin.com/mwlite/in/fajarudheen-pullaratt-3902531b3",
//   isStudentBody : true
// })


// Team.create({
//   name : "Reeshita Paul",
//   designation : "Executive member",
//   image : "/images/Reeshita Paul.png",
//   email : "reeshita_p@ee.iitr.ac.in",
//   contact : "7797331471 ",
//   linkedin: "https://www.linkedin.com/in/reeshita-paul-71248519a",
//   isStudentBody : true
// })


// Team.create({
//   name : "Ayush Rana",
//   designation : "Executive member",
//   image : "/images/Ayush Rana.png",
//   email : "ayush_r@ar.iitr.ac.in",
//   contact : "7298200002",
//   linkedin: "https://www.linkedin.com/in/ayush-rana-412955217",
//   isStudentBody : true
// })


// Team.create({
//   name : "Mukund Shah",
//   designation : "Executive member",
//   image : "/images/Mukund Shah.png",
//   email : "shahmk2003@gmail.com",
//   contact : "9925694082",
//   linkedin: "https://www.linkedin.com/in/mukund-shah-253a53183",
//   isStudentBody : true
// })


// Team.create({
//   name : "Rohit Kishor Kulkarni",
//   designation : "Executive member",
//   image : "/images/Rohit Kishor Kulkarni.png",
//   email : "rohit_k@ch.iitr.ac.in",
//   contact : "8529771574",
//   linkedin: "https://www.linkedin.com/in/rohit-kulkarni-36b131193/",
//   isStudentBody : true
// })


// Team.create({
//   name : "Devesh Yadav",
//   designation : "Executive member",
//   image : "/images/Devesh Yadav.png",
//   email : "devesh.yad02@gmail.com ",
//   contact : "7206841585",
//   linkedin: "https://www.linkedin.com/in/devesh-yadav-nnl",
//   isStudentBody : true
// })


// Team.create({
//   name : "Ankit Kumar",
//   designation : "Executive member",
//   image : "/images/Ankit Kumar.png",
//   email : "ankit_kumar@ee.iitr.ac.in",
//   contact : "7752830936",
//   linkedin: "https://www.linkedin.com/in/ankit-kumar-a391b8196",
//   isStudentBody : true
// })


// ================================================
//  creating admin body


// Team.create({
//   name : "Prof.Ajit Kumar Chaturvedi",
//   designation : "Director",
//   image : "/images/IITR_Director.png",
//   email : "director@iitr.ac.in",
//   contact : "NA",
//   isStudentBody : false
// })


// Team.create({
//   name : "Prof. Akshay Dwivedi",
//   designation : "Associate Dean of Corporate Interactions (ADCI)",
//   image : "/images/Prof.%20Akshay%20Dwivedi.png",
//   email : "adci@iitr.ac.in",
//   contact : "+91-1332-285378",
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
