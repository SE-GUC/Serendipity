const express = require('express')
const Joi = require('joi');
const router = express.Router()
const mongoose = require('mongoose')
router.use(express.json())
// We will be connecting using database 
const Job = require('../../models/Job')

// list all jobs
router.get('/', async (req,res) => {
   var data =`Jobs: <br>` ;
   const Jobs = await Job.find()
   data += Jobs 
   res.json(data)
})

// Get a certain job
router.get('/:id', async (req, res) => {
   var data = "" ;
   const jobId = req.params.id 
   const job = await Job.findOne({jobId})
   if(!job) return res.status(404).send({error: 'Job does not exist'})
   data += `Id: ${job.id}<br>Title: ${job.title}<br>state: ${job.state}<br>startdate: ${job.startdate}<br>enddate: ${job.enddate}<br>location: ${job.location}<br>salary: ${job.salary}<br>dailyhours: ${job.dailyhours}<br>partner: ${job.partner}<br>description: ${job.description}<br>candidates: ${job.candidates}`; 
   
   res.json(data);
});


// Delete a job
router.delete('/:id', async(req, res) => {
   try {
      const id = req.params.id
      const deletedJob = await Job.findByIdAndRemove(id)
      res.json({msg:'Job was deleted successfully', data: deletedJob})
     }
     catch(error) {
         // We will be handling the error later
         console.log(error)
     } 
})

// Update a job
router.put('/:id',async (req, res) => {
   try {
      const id = req.params.id
      const job = await Book.findOne({id})
      if(!job) return res.status(404).send({error: 'Job does not exist'})
      const isValidated = validator.updateValidation(req.body)
      if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
      const updatedJob = await Job.updateOne(req.body)
      res.json({msg: 'Job updated successfully', data: updatedJob})
     }
     catch(error) {
         // We will be handling the error later
         console.log(error)
     } 
})

//create a job
router.post('/', async (req, res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newJob = await Job.create(req.body)
    res.json({msg:'Job was created successfully', data: newJob})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
});



module.exports = router