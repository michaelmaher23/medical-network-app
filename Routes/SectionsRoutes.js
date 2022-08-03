const express = require("express");
const sect = require("../Models/Models/Section.js");
const { errorHandler } = require("../MiddleWares/Error.js");

const SectionsRoute = express.Router();
SectionsRoute.get("/postall", (req, res) => {
  const a = sect.insertMany(
    [
      {  
       name:"Kidneys",
       urlname :"Kidneys",
       pic:"https://res.cloudinary.com/medicalproject/image/upload/v1659021527/DSC02650.jpg_nn99b3.jpg"
      },
      {  
        name: "Lungs",
          urlname : "Lungs",
          pic:"https://res.cloudinary.com/medicalproject/image/upload/v1659022286/4B4A8484.jpg_okbu2b.jpg"
     },{  
        name: "Mental Health",
          urlname : "Mental_Health",
          pic:"https://res.cloudinary.com/medicalproject/image/upload/v1659022464/EE4I9276_copy.jpg_zdqlcg.jpg"
     },{  
        name: "Heart",
          urlname : "Heart",
          pic:"https://res.cloudinary.com/medicalproject/image/upload/v1659022713/DSC_9682.jpg_mmb1g4.jpg"
     },
     {  
        name: "Eyes Care",
          urlname : "Eyes",
          pic:"https://res.cloudinary.com/medicalproject/image/upload/v1659033056/BSV06179_1.jpg_nme2bx.jpg"
     },{  
        name: "Corona",
          urlname : "Corona",
          pic:"https://res.cloudinary.com/medicalproject/image/upload/v1659033405/Back_to_school_covid_124.jpg_e4wzxm.jpg"
     },{  
        name: "Studies",
          urlname : "Studies",
          pic:"https://res.cloudinary.com/medicalproject/image/upload/v1659033614/DSC_0697.JPG_ksmyy9.jpg"
     }
    ],
    function (err) {
      console.log(err);
    }
  );

  console.log("products added");
});
SectionsRoute.get("/:urlname", async (req, res) => {
  console.log((req.params))
   await sect.findOne({urlname:req.params.urlname})
    .then(section => {
        if(section) {
            res.json(section)
        } else {
            res.status(404).json({message:'Product not found'})
        }
    })
    .catch(err => errorHandler(err,req,res))  
  
  
  
  });


{/*ProductRoute.post(
  "/postemail",
  checkSchema(myown1),
  Validate,
  async (req, res) => {
    {
      /*

const email='4d'
  const EmailExist = await Email.findOne({ email });
  if (EmailExist) {
    res.status(400).json({err:'Email Sub already exist'});
    console.log("Email Sub already exist");
  } else {
    const a = new Email({
     email
    });
    if (a) {
      const createdemail = await a.save();
      res.status(201).json(createdemail);
    } else {
      res.status(400);
      console.log("error");
    }
  }


    }
    const { email } = req.body;

    const EmailExist = await Email.findOne({ email });
    if (EmailExist) {
      res.status(400).json({ err: "Email Sub already exist" });
      console.log("Email Sub already exist");
    } else {
      const a = new Email({ email });
      if (a) {
        const createdemail = await a.save();
        res.status(201).json(createdemail);
      } else {
        res.status(400).json({ err: "unknown error" });
        console.log("error");
      }
    }
  }
);

ProductRoute.get("/getemails", async (req, res) => {
  const EMAILS = await Email.find({});
  if (EMAILS) {
    res.status(201).json(EMAILS);
    console.log("EmailS");
  } else {
    res.status(400).json({ err: "ERROR GETTING EMAILS" });
  }
});

ProductRoute.get(
  "/all",
  async (req, res) => {
    const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};


    let a
    if (req.query?.keyword === "" ) {
      try {
    a = await Prod.find({});
      
      res.json({products:a,productss:a});
      } catch (err) {
        errorHandler(err,req,res )
      }
      
    
    } else {
      try {
        console.log(req.query.keyword);
        a = await Prod.aggregate([
          {
            $search: {
              index: "searchName",
              autocomplete: {
                query: `${req.query.keyword}`,
                path: "name",
              },
            },
          },
        
        ]);
        a=await Prod.find({... {name: 
          {
            $regex: req.query.keyword,
            $options: "i",
          }}
        
        })
         const b = await Prod.find({});
    res.json({products:a,productss:b});
      } catch (err) {
        errorHandler(err,req,res );
      }
    }
   
  }
 
   
);


ProductRoute.get("/", async (req, res) => {
  
  Prod.findById(req.query.id)
  .then(product => {
      if(product) {
          res.json(product)
      } else {
          res.status(404).json({message: 'Product not found' })
      }
  })
  .catch(err => errorHandler(err,req,res))  



});
*/}

module.exports = SectionsRoute;
