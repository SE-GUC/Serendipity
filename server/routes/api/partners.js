const express = require('express');
//const Joi = require('joi');
const Partner = require('../../models/Partner');
const router= express.Router();

const validator = require('../../validations/partnerValidations')



//const partners= require('./partners');
const mongoose = require('mongoose');
//const validator = require('../../validations/partnerValidations');

//CREATE PARTNER
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send("Only name,email and password are required when signing up" /*{ error: isValidated.error.details[0].message }*/)
     const newPartner = await Partner.create(req.body)
     res.json({msg:'Partner was created successfully', data: newPartner})
    }
 
    catch(error) { 
        console.log(error)
    }  
 
 })

//GET ALL PARTNERS
router.get('/', async (req,res) => {
    const partners = await Partner.find()
    res.json({data: partners})
})

//GET SINGLE PARTNER
router.get("/:_id", (req, res) => {

    const id = req.params._id;
    Partner.findById(id)
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


module.exports = router;