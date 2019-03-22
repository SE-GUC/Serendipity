const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Job = require('../../models/Job')

const validator = require('../../validations/JobValidations')

var usertype="";
// Get all jobs //check with someone 
//if(usertype==admin){//get all
   router.get('/', async (req,res) => {
      const jobs = await Job.find()
      res.json({data: jobs})
  })
//}
// else
// if(usertype==member){
//    router.get('/', async (req,res) => {
//       const jobs = await Job.find()
//       jobs.state="approved"
//       res.json({data: jobs})
//   }) }  
// else
// if(usertype==partner){
//    router.get('/', async (req,res) => {
//       const jobs = await Job.find()
//       jobs.state="approved"
//       res.json({data: jobs})
//   }) 
  
//   router.get('/', async (req,res) => {
//    const jobs = await Job.find()
//    jobs.partner=partner
//    res.json({data: jobs})
// }) 

// }  



// Get a certain job

router.get('/:id', (req, res) => {
   var data = "";
   Jobs.forEach((value) => {
       if(value.id === req.params.id) {
           data = `Id: ${value.id}<br>Title: ${value.title}<br>state: ${value.state}<br>startdate: ${value.startdate}<br>enddate: ${value.enddate}<br>location: ${value.location}<br>salary: ${value.salary}<br>dailyhours: ${value.dailyhours}<br>partner: ${value.partner}<br>description: ${value.description}<br>candidates: ${value.candidates}`;
           return;
       }
   });
   res.send(data || 'No job matches the requested id');
});


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

router.put('/:id', async (req,res) => {
   try {
    const id = req.params.id
    const job = await Job.findOne({id})
    if(!job) return res.status(404).send({error: 'Job does not exist'})
    const isValidated = validator.updateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedJob = await Job.updateOne(req.body)
    res.json({msg: 'Book updated successfully'})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})
router.put('/:id', (req, res) => {
   const jobId = req.params.id 
   const updatedTitle = req.body.title
   const updatedstate=req.body.state
   const updatedstartdate=req.body.startdate
   const updatedenddate=req.body.enddate
   const updatedlocation=req.body.location
   const updatedsalary=req.body.salary
   const updatedcandidates=req.body.candidates
   const updateddailyhours=req.body.dailyhours
   const updatedpartner=req.body.partner
   const updateddescription=req.body.description;
   
   
   
   const job =Jobs.find(job => job.id === jobId)
   if(updatedTitle){
      job.title = updatedTitle
   }
   if(updatedstate){
      job.state=updatedstate
   }
   if(updatedstartdate){
      job.startdate=updatedstartdate

   }
   if(updatedenddate){
      job.enddate=updatedenddate
   }
   if(updatedlocation){
      job.location=updatedlocation
   }
   if(updatedsalary){
      job.salary=updatedsalary
   }
   if(updatedcandidates){
      job.candidates=updatedcandidates
   }
   if(updateddailyhours){
      job.dailyhours=updateddailyhours
   }
   if(updatedpartner){
      job.partner=updatedpartner
   }
   if(updateddescription){
      job.description=updateddescription
   }
   const schema = {
      title: Joi.string().min(3),
      state: Joi.string().min(3),
      startdate: Joi.date(),
     enddate: Joi.date(),
      location:Joi.string().min(4),
      salary:Joi.number(),
      dailyhours:Joi.number(),
      partner: Joi.string().min(3),
      description: Joi.string().min(3),
      candidates:Joi.array().items()
   
   }
   const result = Joi.validate(req.body, schema);
   if (result.error) return res.status(400).send({ error: result.error.details[0].message });
   res.send(job)
})

//create a job

router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newJob = await Job.create(req.body)
    res.json({msg:'Book was created successfully', data: newJob})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})





module.exports = router