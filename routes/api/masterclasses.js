// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const mongoose = require('mongoose')


const router = express.Router();
router.use(express.json())
// Models
const Masterclass = require('../../models/Masterclass');
const validator = require('../../validations/masterClassValidations')



// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200


// Get all masterclasses
router.get('/', async (req,res) => {
    const masterclases = await Masterclass.find()
    res.json({data: masterclases})
})





// Get a certain MasterClass
router.get('/:id', (req, res) => {
    const id =req.params.id
    const master=Masterclass.findById(id)
    
    res.json(master || 'No masterclass matches the requested id');
});

//create
router.post('/', (req, res) => {
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newMaster = await Masterclass.create(req.body)
        res.json({msg:'MasterClass was created successfully', data: newMaster})
       }
       catch(error) {
           console.log(error)
       }
});

// Update a masterclass 
router.put('/:id', (req, res) => {
    try {
        const id = req.params.id
        const master = await Masterclass.findById(id)
        if(!master) return res.status(404).send({error: 'masterClass does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedMaster = await Masterclass.updateOne(req.body)
        res.json({msg: 'MasterClass updated successfully',
                  Data: updatedMaster
                })
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    
})






// Delete a masterclass
router.delete('/:id', (req, res) => {
    try {
        const id = req.params.id
        const deletedMaster = await Masterclass.findByIdAndRemove(id)
        res.json({msg:'MasterClass was deleted successfully', data: deletedMaster})
       }
       catch(error) {
           console.log(error)
       }  
        
})







module.exports = router;
