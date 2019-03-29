const express = require('express')
const router = express.Router()
const Joi = require('joi')
const uuid = require('uuid') 
const mongoose = require('mongoose')
const objectId = require('mongoose').objectid //needed to access by id


const EducationalOrganization = require('../../models/EducationalOrganization')
const validator = require('../../validations/EduOrgValidations')

router.get('/', async (req,res) => {
    const educationalOrganizations = await EducationalOrganization.find().populate('masterClasses').populate('courses')
    res.json({data: educationalOrganizations})
})
///get masterclassesof this EduORg


router.get('/:id', async (req,res) => {
    
    try {
        const id = req.params.id

        const educationalOrganizations = await EducationalOrganization.findById(id).populate('masterClasses').populate('courses')
     //   const user = await book.reviews

        if(!educationalOrganizations) return res.status(404).send({error: 'educational organization does not exist'})
        
        res.json({data: educationalOrganizations})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    

    res.json({data: educationalOrganizations})
})

router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newEducationalOrganization = await EducationalOrganization.create(req.body)
     res.json({msg:'Educational organization was created successfully', data: newEducationalOrganization})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })






 //only updates first tuple
 // router.put('/:id', async (req,res) => {
     //     try {
         //      const id = req.params.id
         
         //      const eduorg = await EducationalOrganization.findByIdAndUpdate(id)
         
         //      if(!eduorg) return res.status(404).send({error: 'Profile does not exist'+id})
         //      const isValidated = validator.updateValidation(req.body)
         //      if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
         //      const updatedEdu = await EducationalOrganization.updateOne(req.body)
         //      res.json({msg: 'Profile updated successfully'+id, data : updatedEdu})
         //     }
         //     catch(error) {
             //         // We will be handling the error later
             //         console.log(error)
             //     }  
             //  })
// update Profile
router.put('/:_id', async (req,res) => {

    const isValidated = validator.updateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   else{
    EducationalOrganization.findByIdAndUpdate(req.params._id, req.body)
    .exec()
    .then(r => {return res.redirect(303, `/api/educationalOrganizations/${req.params._id}`) })
    .catch(err => {console.log(err); return res.send("No Edu Org found for provided ID") })
   }
  
})
// router.put('/:id', async (req,res) => {
//     try {
//      const id = req.params.id
     
//      const eduorg = await EducationalOrganization.findByIdAndUpdate(id)

//     const ID = {"_id":id}

//      if(!eduorg) return res.status(404).send({error: 'Profile does not exist'})
//      const isValidated = validator.updateValidation(req.body)
//      if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
//      const updatedEdu = await EducationalOrganization.updateOne(req.body)
//      res.json({msg: 'Profile updated successfully', data:updatedEdu})
//     }
//     catch(error) {
//         // We will be handling the error later
//         console.log(error)
//     }  
//  })


//yara Delete  Works
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedEduOrgProfile = await EducationalOrganization.findByIdAndRemove(id)
     res.json({msg:'Profile was deleted successfully', data: deletedEduOrgProfile})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router

// router.get('/:id/masterclasses' ,async (req,res)=>{

// })
