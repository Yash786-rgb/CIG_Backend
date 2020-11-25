const express =require('express');
const router= express.Router();
const Cls = require("../model/cls");

// Cls.create({
//   date : "6th September 2019",
//   heading : "Challenges and Opportunities in Cloud Operations",
//   name : "Mr. Raman Krishnaswami",
//   designation : "Senior Director of Global Cloud Operations at SAP",
//   companyIcon : "/images/SAP.png",
//   img : "/images/Mr.%20Raman%20Krishnaswami.png"
// })

// Cls.create({
//   date : "22nd October 2019",
//   heading : "Changing Trends in Steel Sector in 21st Century India",
//   name : "Mr. P. K. Singh",
//   designation : "Executive Director at APL Apollo Tubes Ltd, ex-chairperson and Managing Director at SAIL",
//   companyIcon : "/images/APL%20Apollo%20Tubes.png",
//   img : "/images/Mr.%20P.%20K.%20Singh.png"  
// })


// Cls.create({
//   date : "9th January 2020",
//   heading : "Convergence of Geospatial Technology in Al/ML and IOT for New India",
//   name : "Mr Rajesh C. Mathur",
//   designation : "Director of Esri India Technologies Ltd., Esri,Inc",
//   companyIcon : "/images/Esri%20India%20Technologies.png",
//   img : "/images/Mr%20Rajesh%20C%20Mathur.png"
// })

// Cls.create({
//   date : "23rd January 2020",
//   heading : "Distributed Data Science for Connected and Autonomous Cars: From Research to Best Seller Products",
//   name : "Mr. Hillol Kargupta",
//   designation : "co-founder and the President of Agnik Group",
//   companyIcon : "/images/Agnik%20Group.png",
//   img : "/images/Mr.%20Hillol%20Kargupta.png"
// })


// Cls.create({
//   date : "16th August 2020",
//   heading : "AI and Big Data Analytics",
//   name : "Dr Sunil Kumar Vippula",
//   designation : "Director Data Science at Ericsson",
//   companyIcon : "/images/Ericsson.png",
//   img : "/images/Dr%20Sunil%20Kumar%20Vippula.png"
// })


router.get("/",(req,res,next)=>{
  console.log("req for cls at backend");
  Cls.find({},(err,found)=>{
    if(err){
      console.log("err");
      console.log(err);
    }else{
      res.send(found);
      console.log("cls send from backend");
    }
  })
})


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