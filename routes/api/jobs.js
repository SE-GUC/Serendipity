const express = require('express')

const Joi = require('joi');
const router = express.Router()
const mongoose = require('mongoose')
router.use(express.json())
const Job = require('../../models/Job')
const Admin = require('../../models/Admin')//yara
const validator = require('../../validations/jobValidations')

////////////////yara WORKS!!!
//admin post job
router.put('/:jid/postjob/:aid',async(req,res)=>{
   const adid = req.params.aid //get admin id 
   const jobid=req.param.jid //get job id
   const admin= await Admin.findById(adid) //checks if its an admin
   if(!admin) return res.status(404).send({error: 'You are not allowed to change the status of this job'})
   const updatedJob = await Job.findOneAndUpdate(jobid,req.body)
   res.json({msg: 'Admin updated Job successfully',data:updatedJob
   })

})

//////////


// Get all jobs 
router.get('/', async (req,res) => {
   const jobs = await Job.find()
   res.json({data: jobs})
})
  
// Get a certain job



router.get('/:id', async (req,res) => {
    
   try {
       const id = req.params.id

       const job = await Job.findById(id)
      

       if(!job) return res.status(404).send({error: 'job does not exist'})
       
       res.json({data: job})
      }
      catch(error) {
          // We will be handling the error later
          console.log(error)
      }  
   

   res.json({data: job})
})






// Delete a job


router.delete('/:id', async (req,res) => {
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



//create a job
// create a new member and add it to the database
// router.post('/', async (req, res) => {
//    try {
//        const isValidated = validator.createValidation(req.body)
//        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
//        const newJob = await Job.create(req.body)
//        res.json({msg:'Job created successfully', data: newJob})
//       }
//       catch(error) {
//           // We will be handling the error later
//           console.log(error)

//       } 
// });

router.put('/:id', async (req,res) => {
   try {
    const id = req.params.id
    const job = await Job.findById(id)
    const ID={"_id":id}
    if(!job) return res.status(404).send({error: 'Job does not exist'})
    const isValidated = validator.updateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedJob = await Job.findOneAndUpdate(ID,req.body)
    res.json({msg: 'Job updated successfully',data:updatedJob
   })
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

//create a job

router.post('/', async (req,res) => {
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
})



module.exports = router