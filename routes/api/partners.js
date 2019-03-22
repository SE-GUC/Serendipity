const express = require('express');
const Joi = require('joi');
const Partner = require('../../models/Partner');
const router= express.Router();
//const partners= require('./partners');
const mongoose = require('mongoose');
const validator = require('../../validations/partnerValidations');

// const partners = [
//     new Partner('a@gmail','Marina','asdfgh')
// ];


//CREATE PARTNER
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
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
         Partner.findByIdAndUpdate(req.params._id, req.body)
         .exec()
         .then(r => {return res.redirect(303, `/api/partners/${req.params._id}`) })
         .catch(err => {console.log(err); return res.send("No partner found for provided ID") })
        }
       
     })
 
/*
router.put('/:username', (req,res)=> {
    const found = partners.some(partner => partner.username  === req.params.username);
    const schema = {
        email: Joi.string().email(),
        name: Joi.string(),
        username: Joi.string(),
        password: Joi.string(),
        description: Joi.string(),
        partners: Joi.array().items(),
        boardMembers: Joi.array().items(),
        fieldOfWork: Joi.string(),
        vacancies: Joi.array().items(Joi.string()),
        pastProjects: Joi.array().items(Joi.string()),
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });


    if(found){
        const upPartner = req.body;
        partners.forEach(partner => {

            if(partner.username === req.params.username){
              
                partner.email=upPartner.email ? upPartner.email : partner.email;
                partner.username=upPartner.username ? upPartner.username : partner.username;
                partner.name=upPartner.name ? upPartner.name : partner.name;
                partner.password=upPartner.password ? upPartner.password : partner.password;
                partner.description=upPartner.description ? upPartner.description : partner.description;
                partner.partners=upPartner.partners ? upPartner.partners : partner.partners;
                partner.boardMembers=upPartner.boardMembers ? upPartner.boardMembers : partner.boardMembers;
                partner.fieldOfWork=upPartner.fieldOfWork ? upPartner.fieldOfWork : partner.fieldOfWork;
                partner.vacancies=upPartner.vacancies ? upPartner.vacancies : partner.vacancies;
                partner.pastProjects=upPartner.pastProjects ? upPartner.pastProjects : partner.pastProjects;
            
                res.json({msg: 'Partner updated', partner})
               }
        });
    }
    else {
        res.status(400).json({msg: `No partner with the username of ${req.params.username}`})
    }

});
*/

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