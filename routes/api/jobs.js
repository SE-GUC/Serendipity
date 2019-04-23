const express = require('express')

const Joi = require('joi');
const router = express.Router()
const mongoose = require('mongoose')
router.use(express.json())
const Job = require('../../models/Job')
const Admin = require('../../models/Admin')//yara
const validator = require('../../Validations/jobValidations')
const passport = require('passport');//for auth trial


const funcs=require('../../fn');
////////////////yara WORKS!!!
//admin post job
router.put('/:jid/postjob/:aid',async(req,res)=>{
   const adid = req.params.aid //get admin id 
   const jobid=req.param.jid //get job id
   const admin= await Admin.findById(adid) //checks if its an admin
   if(!admin) return res.status(404).send({error: 'You are not allowed to change the status of this job'})
   const updatedJob = await Job.findOneAndUpdate(jobid,req.body)
   res.json({msg: 'Admin updated Job successfully',data:updatedJob})

})

//////////


// Get all jobs 
router.get('/', async (req,res) => {
   const jobs = await Job.find()
   res.json({data: jobs})
})

// serach for a job by name 
router.get('/y/:title', async (req,res) => {
    
   try {
       const title = req.params.title
       const jobs= await funcs.getJobs()
       console.log(title+'hiii')
        const joby=[];
        for(var i=0;i<jobs.data.data.length;i++){
           if (jobs.data.data[i].title===title)
           joby.push(jobs.data.data[i])
           res.json({data: joby})
        }
       
      }
      catch(error) {
          // We will be handling the error later
          console.log(error)
      }  
   

   res.json({data: joby})
})
  
// Get a certain job 
router.get("/:id", (req, res) => {
   const id = req.params._id;
   const job=Job.findById(id)
   Job.findById(id)
     .exec()
     .then(
        doc => {
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No job found for provided ID" });
        }
   })
   .catch(err => {
       console.log(err);
       res.status(500).json({ error: err });
     });
 });


//  router.get('/:id', async (req,res) => {
    
//     try {
//         const id = req.params._id

//         const job = await Job.findById(id)
      

//         if(!job) return res.status(404).send({error: 'job does not exist'})
       
//        res.json({data: job})
//       }
//       catch(error) {
//           // We will be handling the error later
//           console.log(error)
//       }  
   

//     res.json({data: job})
//  })






// Delete a job


router.delete('/:id', async (req,res) => {
   try {
    const id = req.params.id
    const deletedJob = await Job.findByIdAndRemove(id)
    res.json({msg:'Job was deleted successfully', data: deletedJob})
   }
   catch(error) {
      
       console.log(error)
   }  
});




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
    //newJob.state="pending"
    res.json({msg:'Job was created successfully', data: newJob})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  



})
// as a member I should be able to apply for a job

router.put('/:id/apply', passport.authenticate('jwt', { session: false }),async (req, res) => {
   console.log('hnaaSmsm')
   console.log(req.body.applicantId)
   console.log('hnaaSmsm')
   console.log("apply course")
  
   console.log(req.params.id)
   const member =await Member.findById(req.body.applicantId )
   if(member){


   const isValidated = validator.applyValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });

   const applicantId = req.body.applicantId;
   const jobId = req.params.id;
   console.log(jobId)
   var job = await Job.findById(jobId);
//if (!course) return res.json({ error: 'course does not exist' })

   console.log('one')
   console.log(job)

   job.applicants.push(applicantId);
   console.log('two')

   Job.findByIdAndUpdate(jobId, { applicants: job.applicants })
       .exec()
       .then(doc => { return res.redirect(303, `/api/jobs/${req.params.id}`) })
       .catch(err => { console.log(err); return res.send(`Sorry, couldn't update a job with that id !`) });

   console.log('one')
   res.json({err : "you applied successfully"})
   }else{
      console.log("Could not find a Workshop with this id")
        res.json({err : "you're not authorized"})
   }

})
// router.put('/:jid/apply/:mid',async (req,res)=>{
//    console.log("apply job")
//    const memberid = req.params.mid
//    const jobid = req.params.jid
//    const member = await Member.findById(memberid)
//    const job = await Job.findById(jobid)
//    console.log(jobid)
//    console.log(memberid)

//    if(!job) return res.status(400).send({ error:'job does not exist' })
//    if(!member) return res.status(400).send({ error:'member does not exist' })

//    Job.update(
//       {_id:jobid},
//       {$push: {applicants: memberid}}
//    )
//       res.json({msg:'applicant was added succsessfully', data:job})


// })
router.put('/:jid/accept/:mid',async (req,res)=>{
   const memberid = req.params.mid
   const jobid = req.params.jid
   const member = await Member.findById(memberid)
   const job = await Job.findByIdAndUpdate(jobid, { taken: memberid,state:'assigned'})
   if(!member) return res.status(400).send({ error:'member does not exist' })
   if(!job) return res.status(400).send({ error:'job does not exist' })
 
         res.json({msg:'applicant took the job', data:job})
   
   

})



module.exports = router
