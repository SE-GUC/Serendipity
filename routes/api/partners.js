const express = require('express');
//const Joi = require('joi');
const Partner = require('../../models/Partner');
const router= express.Router();

const validator = require('../../Validations/partnerValidations')



//const partners= require('./partners');
const mongoose = require('mongoose');
//const validator = require('../../validations/partnerValidations');

//CREATE PARTNER
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send("Only name,email and password are required when signing up" /*{ error: isValidated.error.details[0].message }*/)
     const newPartner = await Partner.create(req.body)
     require('../../services/mailer').sendMail(newPartner).then(data => {
      console.log(data)
     }).catch(err => console.log(err)) ;
     res.json({msg:'Partner was created successfully', data: newPartner})
    }
 
    catch(error) { 
        console.log(error)
    }  
 
 })

//GET ALL PARTNERS
router.get('/', async (req,res) => {
    const partners = await Partner.find().populate('jobs')
    res.json({data: partners})
})

//GET SINGLE PARTNER
router.get("/:_id", (req, res) => {
 


    const id = req.params._id;
     Partner.findById(id).populate('jobs')
      .exec()
      .then(doc => {
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No partner found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
      
  });

//UPDATE A PARTNER
router.put('/:_id', async (req,res) => {

         const isValidated = validator.updateValidation(req.body)
         if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        else{
         await Partner.findByIdAndUpdate(req.params._id, req.body)
         .exec()
         .then(r => {return res.redirect(303, `/api/partners/${req.params._id}`) })
         .catch(err => {console.log(err); return res.status(400).send("No partner found for provided ID") })
        }
       
     })
 
//DELETE A PARTNER
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedPartner = await Partner.findByIdAndRemove(id)
     res.json({msg:'Partner was deleted successfully', data: deletedPartner})
    }
    catch(error) {
        console.log(error)
    }  
 })

//GET APPLICANTS FOR A POSTED JOB
router.get('/:pid/applicants/:jid',async(req,res)=>{
  const partnerId = req.params.pid;
  const jobId = req.params.jid;
  const job = await Job.findById(jobId);
  if(!job) return res.status(400).send({ error:'Job does not exist' })
  const string = JSON.stringify(job);
  const objectValue = JSON.parse(string);
  const applicants = objectValue['applicants'];
  const partner1 = objectValue['partner'];
   if (partner1!=partnerId)
  return res.status(400).send({ error:'This job does not belong to that partner' })
  
  res.json({applicants})
})

module.exports = router;
