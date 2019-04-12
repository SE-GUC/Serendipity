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

router.get('/:id', async (req,res) => {
    
    try {
        const id = req.params.id

        const assessments = await Assessment.findById(id)
     //   const user = await book.reviews

        if(!assessments) return res.status(404).send({error: 'This Assessmnet does not exist'})
        
        res.json({data: assessments})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    

    res.json({data: book})
})

router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     var New = req.body;
     New["status"] = "pending"
     const newAssessments = await Assessment.create(New)

     console.log(newAssessments.status)
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

 router.put('/:id/accept', async(req,res) => {
     try{
        //  console.log(req.p)
     const assess = await Assessment.findByIdAndUpdate(req.params.id,{status:"accepted"})
     console.log(assess)
     res.json({data : assess})
    }
    catch(error) {
        return res.status(400).send(`Sorry, couldn't accept an Assessment with that id !`) 
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


