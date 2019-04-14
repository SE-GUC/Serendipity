const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const mongoose = require('mongoose')


const router = express.Router();
router.use(express.json())
// Models
const Masterclass = require('../../models/Masterclass');
//requiring courses model for viewing 
const Course=require('../../models/Course');
const Workshop=require('../../models/Workshop');
const EducationalOrganization=require('../../models/EducationalOrganization')
const validator = require('../../Validations/masterClassValidations')



// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200


// Get all masterclasses
router.get('/', async (req,res) => {
    const masterclases = await Masterclass.find().populate('courseIDs').populate('workshopsIDs').populate('applicants')
    res.json({data: masterclases})
})

router.get('/:id', async (req,res) => {
    
    try {
        const id = req.params.id

        const master = await Masterclass.findById(id).populate('courseIDs').populate('workshopsIDs').populate('applicants')
       

        if(!master) return res.status(404).send({error: 'Masterclass does not exist'})
        
        res.json({data: master})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    

    //res.json({data: master})
})
//create
router.post('/', async(req, res) => {
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
router.put('/:id', async(req, res) => {
    try {
        const id = req.params.id
        const master = await Masterclass.findById(id)
        if(!master) return res.status(404).send({error: 'masterClass does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const ID={"_id":id}
        const updatedMaster = await Masterclass.findOneAndUpdate(ID,req.body)
        res.json({msg: 'MasterClass updated successfully',
                  Data: updatedMaster
                })
       }
       catch(error) {
           
           console.log(error)
       }  
    
})


router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedMaster = await Masterclass.findByIdAndRemove(id)
     res.json({msg:'masterclass was deleted successfully', data: deletedMaster})
    }
    catch(error) {
        
        console.log(error)
    }  
 
 })


 // as a member i can apply for a masterclass
 router.put("/:maid/apply/:mid",async(req,res)=>{
    const memberid=req.params.mid
    const masterclassid=req.params.maid
    const member=await Member.findById(memberid)
    const master=await Masterclass.findById(masterclassid)
    if(!member) return res.status(400).send({error:'member does not exist'})
    if(!master) return res.status(400).send({error:'master does not exist'})

    Masterclass.update(
        {_id:masterclassid},
        {$push:{applicants:memberid}},
        res.json({msg:'applicants was added successfuly',data:master})
    )

}
)







module.exports = router;

