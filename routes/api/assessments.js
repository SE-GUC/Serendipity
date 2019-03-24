const express = require ('express')
const router = express.Router()

const Joi = require('joi')
const uuid = require('uuid') 
//const mongoose = require('mongoose')
const objectId = require('mongoose').objectid
const mongoose = require('mongoose')


const Assessment = require('../../models/Assessment')
const validator = require('../../validations/AssessValidations')

router.get('/', async (req,res) => {
    const assessments = await Assessment.find()
    res.json({data: assessments})
})


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


 //update assessment
 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id

     const assess = await Assessment.findByIdAndUpdate(id)

     if(!assess) return res.status(404).send({error: 'Assessment appointment has not been booked'+id})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updateAssess = await Assessment.updateOne(req.body)
     res.json({msg: 'Assessment was updated successfully'+id, data : updateAssess})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
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
        // We will be handling the error later
        console.log(error)
    }  
 })


module.exports = router

router.get('/:id/assessments' ,async (req,res)=>{

})


