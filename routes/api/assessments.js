

const express = require ('express')
const router = express.Router()

const Joi = require('joi')
const uuid = require('uuid') 
//const mongoose = require('mongoose')
const objectId = require('mongoose').objectid
const mongoose = require('mongoose')
const passport = require('passport');//for auth trial


const Assessment = require('../../models/Assessment')

const validator = require('../../Validations/AssessValidations')

router.get('/', async (req,res) => {
    const assessments = await Assessment.find()
    res.json({data: assessments})
})


router.post('/:_id', passport.authenticate('jwt', { session: false }),async(req, res) =>{

    //req.user.id == id 
    
    const id = req.params._id;
    console.log(req.params._id);
    const member =await member.findById(req.user.id )
    const admin = await admin.findById(req.user.id)
    id2=''
    if(!member || !admin){
      // id2="";
      res.status(401).json({ err: "Not authorized "});
    }
    else if(member){
       id2=member._id;
    }
    else{
        id2=admin._id;
    }
    console.log(id)
    console.log(id2)
    console.log(req.user.id)
    // const id2="";
    // =;admin.id
    const id3=req.user.id
    if(id3==id2 || id3==id) {
      console.log('hiii')
      Assessment.findById(id)
      
        .exec()
        .then(doc => {
          if (doc) {
            res.status(200).json(doc);
          
          } else {
            res
              .status(404)
              .json({ message: "No Assessment found for provided ID" });
          }
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ error: err });
        });
      } else {
        res.status(401).json({ err: "Not authorized "});
      }
      
  });

  router.get('/:_id', passport.authenticate('jwt', { session: false }),async(req, res) =>{

    //req.user.id == id 
    
    const id = req.params._id;
    console.log(req.params._id);
    //const member =await member.findById(req.user.id )
    const admin = await admin.findById(req.user.id)
    id2=''
    if(!admin){
      // id2="";
      res.status(401).json({ err: "Not authorized "});
    }
    
    else{
        id2=admin._id;
    }
    console.log(id)
    console.log(id2)
    console.log(req.user.id)
    // const id2="";
    // =;admin.id
    const id3=req.user.id
    if(id3==id2 || id3==id) {
      console.log('hiii')
      Assessment.findById(id)
      
        .exec()
        .then(doc => {
          if (doc) {
            res.status(200).json(doc);
          
          } else {
            res
              .status(404)
              .json({ message: "No Assessment found for provided ID" });
          }
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ error: err });
        });
      } else {
        res.status(401).json({ err: "Not authorized "});
      }
      
  });


//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/:id', async (req,res) => {
    
    try {
        const id = req.params.id

        const assessments = await Assessment.findById(id)
   

        if(!assessments) return res.status(404).send({error: 'This Assessmnet does not exist'})
        
        res.json({data: assessments})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    

    res.json({data: assessments})
})

router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error){ console.log(  isValidated.error.details[0].message)
      return res.status(400).send({ error: isValidated.error.details[0].message })}
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
        return res.status(400).send('Sorry, could not accept an Assessment with that id!') 
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


