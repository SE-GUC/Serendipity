const express = require('express')
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router()

router.use(express.json())
// We will be connecting using database 
const Job = require('../../models/Job')

// temporary data created as if it was pulled out of the database ...
const Jobs = [
   new Job('Manager','open','1-1-2015','1-1-2019','maadi',3000,8,'waled','managing interns',['ahmed','mohamed']),
   new Job('hr','pending','31/2/2019','1/3/2020','october',5000,12,'tarek','hiring people',['noura','sara'])
];

// Get all jobs
//router.get('/', (req, res) => res.json({ data: Jobs }));

router.get('/', (req, res) => {
   let data = "";
   Jobs.forEach((value) => {
       const job_id = value.id;
       const job_name = value.title;
       data += `<a href="/api/jobs/${job_id}">${job_name}</a><br>`;
   });
   res.send(data);
});

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



// Get a certain job
router.get('/:id', (req, res) => {

   const jobId = req.params.id 
   const found = Jobs.some(job => job.id === jobId)
   if(found){
   res.json({
   Jobs:Jobs.filter(job =>job.id!==jobId)
})

   }
   else{

      res.status(404).json({err: 'We can not find the job you are looking for you are looking for sorry'});
   }
});


// Delete a job

router.delete('/:id', (req, res) => {
   const jobId = req.params.id 
   const job = Jobs.find(job=> job.id === jobId)
   const index = Jobs.indexOf(job)
   Jobs.splice(index,1)
   res.send(Jobs)
})

// Update a job
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
router.post('/', (req, res) => {
	const title = req.body.title
   const state = req.body.state
   const startdate=req.body.startdate
   const enddate=req.body.enddate
   const location=req.body.location
   const salary=req.body.salary
   const candidates=req.body.candidates
   const dailyhours=req.body.dailyhours
   const partner=req.body.partner
   const description=req.body.description;

	const schema = {
		title: Joi.string().min(3).required(),
      state: Joi.string().min(3).required(),
      startdate: Joi.date().required(),
      enddate: Joi.date().required(),
      location:Joi.string().required().min(4),
      salary:Joi.number().required(),
      dailyhours:Joi.number().required(),
      partner: Joi.string().min(3).required(),
      description: Joi.string().min(3).required(),
      candidates:Joi.array().items()

	}
	const result = Joi.validate(req.body, schema);
	if (result.error) return res.status(400).send({ error: result.error.details[0].message });
	const job =  {
      title,
      state,
      candidates,
      startdate,
      enddate,
      location,
      salary,
      dailyhours,
      partner,
      description,
      id:uuid.v4(),
   }
   Jobs.push(job)
   res.send(Jobs)
	//return res.json({ data: job });
});



module.exports = router