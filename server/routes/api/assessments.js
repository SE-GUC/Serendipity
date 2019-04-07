const express = require ('express')
const Assessment = require('../../models/Assessment');
const router = express.Router()

// const Joi = require('joi')
// const uuid = require('uuid') 
// const mongoose = require('mongoose')
// const objectId = require('mongoose').objectid


const validator = require('../../validations/AssessValidations')
const mongoose = require('mongoose');

//getting all assessments
router.get('/', async (req,res) => {
    const assessments = await Assessment.find()
    res.json({data: assessments})
})

//create assessment
router.post('/', async (req,res) => {
    try {
      console.log("entered post assessment")
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) { console.log(isValidated.error.details[0].message)
     return res.status(400).send({ error: isValidated.error.details[0].message })}
     const newAssessments = await Assessment.create(req.body)
     console.log("created asssesments succcess")
     res.json({msg:'Assessment appointment booked successfully', data: newAssessments})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

//getting one assessment
router.get("/:_id", (req, res) => {

    const id = req.params._id;
    console.log("entered the get id")
    Assessment.findById(id)
      .exec()
      .then(doc => {
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No assessment was found for the entered ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });


// router.get('/:_id', async (req,res) => {
    
//   try {
//       const id = req.params.id
//     console.log("in get by id a ")
//       const assessment = await Assessment.findById(id)
//    //   const user = await book.reviews

//       if(!assessment) { console.log("error in a get by id ")
//         return res.status(404).send({error: 'assessment does not exist'})}
//       console.log("in get by id a success ")
//       res.json({data: assessment})
//      }
//      catch(error) {
//          // We will be handling the error later
//          console.log(error)
//      }  

// })

 //update an assessment
 router.put('/:id', async (req,res) => {
  try {
    console.log("in put a")
   const id = req.params.id
   const assess = await Assessment.findById(id)
   const ID = {"_id":id}
   if(!assess) return res.status(404).send({error: 'assess does not exist'})
   const isValidated = validator.updateValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const updatedAssess = await Assessment.findOneAndUpdate(ID,req.body)
   console.log("in put a sucess")
   res.json({msg: 'Assess updated successfully',data:updatedAssess})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }
})









 ////////////////////////////////////////////////
//  router.put('/:_id', async (req,res) => {
//     console.log("entered a put")
//     const isValidated = validator.updateValidation(req.body)
//     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
//    else{
//     await Assessment.findByIdAndUpdate(req.params._id, req.body)
//     .exec()
//     .then(r => {return res.redirect(303, `/api/assessments/${req.params._id}`) })
//     .catch(err => {console.log(err); return res.status(400).send("No assessment was found for the entered ID") })
//    }
  
// })

//delete
 router.delete('/:id', async (req,res) => {
    try {
      console.log("delete a")
     const id = req.params.id
     const deleteAssess = await Assessment.findByIdAndRemove(id)
     res.json({msg:'Appointment for an assessment was deleted successfully', data: deleteAssess})
     console.log("delete a success")
    }
    catch(error) {
        console.log(error)
    }  
 })


module.exports = router;


