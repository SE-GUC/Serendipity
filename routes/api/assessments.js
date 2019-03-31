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
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newAssessments = await Assessment.create(req.body)
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


 //update an assessment
 router.put('/:_id', async (req,res) => {

    const isValidated = validator.updateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   else{
    await Assessment.findByIdAndUpdate(req.params._id, req.body)
    .exec()
    .then(r => {return res.redirect(303, `/api/assessments/${req.params._id}`) })
    .catch(err => {console.log(err); return res.status(400).send("No assessment was found for the entered ID") })
   }
  
})

//delete
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deleteAssess = await Assessment.findByIdAndRemove(id)
     res.json({msg:'Appointment for an assessment was deleted successfully', data: deleteAssess})
    }
    catch(error) {
        console.log(error)
    }  
 })


module.exports = router;


