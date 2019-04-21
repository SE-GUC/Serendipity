const express = require('express');
const axios = require('axios');
//const Joi = require('joi');
//const uuid = require('uuid');
const router = express.Router();
const mongoose = require('mongoose')
const Job = require('../../models/Job')
//const validator = require('../../validations/jobValidations')
router.use(express.json())
// We will be connecting using database 
const Admin = require('../../models/Admin')
const validator = require('../../Validations/AdminValidations')


const funcs = require('../../fn');
//import axios from 'axios';





router.get('/', async (req,res) => {
    const admins = await Admin.find()
    res.json({data: admins})
})



router.get('/:id', async (req,res) => {
    
    try {
        const id = req.params.id

        const admin = await Admin.findById(id)
       

        if(!admin) return res.status(404).send({error: 'Admin does not exist'})
        data = `Name: ${admin.full_name} Email: ${admin.email} Username: ${admin.username}`;
      
    
        
        res.json(data)
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    

   // res.json({data: admin})
})


router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newAdmin = await Admin.create(req.body)
     res.json({msg:'Admin was created successfully', data: newAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })



 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const admin = await Admin.findById(id)
     const ID = {"_id":id}
     if(!admin) return res.status(404).send({error: 'Admin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAdmin = await Admin.findOneAndUpdate(ID,req.body)
     res.json({msg: 'Admin updated successfully',data:updatedAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
 })


 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedAdmin = await Admin.findByIdAndRemove(id)
     res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })



 // as an admin i can get all pending jobs




 router.get('/p/pendingjobs', async (req,res) => {
   try{
    const jobs = await funcs.getJobs()
    
   
     
         const jobspending =[]
        
         for(var i=0;i<jobs.data.data.length;i++){
           
             if(jobs.data.data[i].state==="pending")
            jobspending.push(jobs.data.data[i])}
            res.json({data: jobspending})
           
         }
         catch(error) {
      
            console.log(error)
        }  
      
    
     
    
    
  
    

    //res.json({data: jobs})}

   
 })

 // approve or reject a pending job
 router.put('/approverejectjob/:id',async(req,res)=>{

    const id = req.params.id
     const job = await Job.findById(id)
     const ID = {"_id":id}
     if(!job) return res.status(404).send({error: 'job does not exist'})
     //const isValidated = validator.updateValidation(req.body)
     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedjob = await Job.findOneAndUpdate(ID,req.body)
     res.json({msg: 'Job updated successfully',data:updatedjob})
    }

  



)

// router.put('/approverejectjob/:id', async (req,res) => {

// //     const isValidated = validator.updateValidation(req.body)
// //     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
// //    else{
//    const job= await Job.findByIdAndUpdate(req.params._id, req.body)
//     .exec()
//     .then(r => {return res.json({data:job})
//     .catch(err => {console.log(err); return res.status(400).send("No job found for provided ID") })
//    }

  


 // reject a pending job
//  router.put('/rejectjob/:id',async(req,res)=>{

   

//     const id = req.params.id
//     const job = await Job.findById(id)
//     const ID = {"_id":id}
//     if(!job) return res.status(404).send({error: 'job does not exist'})
//     //const isValidated = validator.updateValidation(req.body)
//     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
//     const updatedjob = await Job.findOneAndUpdate(ID,req.body)
//     res.json({msg: 'Job updated successfully',data:updatedjob})

// })





module.exports = router;
