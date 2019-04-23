const express = require('express')

const Joi = require('joi');
const router = express.Router()
const mongoose = require('mongoose')
router.use(express.json())
const Job = require('../../models/Job')
const Admin = require('../../models/Admin')//yara
const validator = require('../../Validations/jobValidations')
const axios = require('axios');
//const passport = require('passport');//for auth trial


const funcs=require('../../fn');
const passport = require('passport');

// Get all jobs 
router.get('/',  async(req,res) => {
   
   const jobs = await Job.find().populate('applicants')
   res.json({data: jobs})
})
router.get('/a/approved',  async(req,res) => {
   
   
   try{
      const jobs = await  funcs.getJobs()
      
           const jobspending =[]
          console.log(jobs.data.data.length)
           for(var i=0;i<jobs.data.data.length;i++){
             
               if(jobs.data.data[i].state==="approved"){
                  console.log(jobs.data.data[i].state)
              jobspending.push(jobs.data.data[i])}
            }
            res.json({data: jobspending})
         }
           catch(error) {
        
              console.log(error)
          }  
        
      
       
      
      
   
})



// serach for a job by name 
router.get('/y/:title', async (req,res) => {
    
   try {
       const title = req.params.title
       const jobs= await funcs.getJobs()
       console.log(title+'hiii')
        const joby=[];
        for(var i=0;i<jobs.data.data.length;i++){
           if (jobs.data.data[i].title.includes(title))
           joby.push(jobs.data.data[i])
           //res.json({data: joby})
        }
        res.json({data: joby})
      }
      catch(error) {
          // We will be handling the error later
          console.log(error)
      }  
   

   
})
  
// Get a certain job 

router.get("/:_id", (req, res) => {
 


   const id = req.params._id;
    Job.findById(id)
     .exec()
     .then(doc => {
       if (doc) {
         res.status(200).json(doc);
       } else {
         res
           .status(404)
           .json({ message: "No Job found for provided ID" });
       }
     })
     .catch(err => {
       console.log(err);
       res.status(500).json({ error: err });
     });
     
 });









// Delete a job

//router.put('/:id',passport.authenticate('jwt', { session: false }),async(req, res) =>{
router.delete('/:id',passport.authenticate('jwt', { session: false }),async(req, res) =>{
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

router.post('/',passport.authenticate('jwt', { session: false }), async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error){ console.log( isValidated.error.details[0].message)
        return res.status(400).send({ error: isValidated.error.details[0].message }) }
    const admin =await Admin.findById(req.user.id )
    id2=''
    if(!admin){
       id2="";
    }
    else{
       id2=admin._id;
    }
    const id3=req.user.id
    const partner= Partner.findById(id3)
    if(partner) console.log("partner exists")
    console.log(partner._id)
console.log(id3)
    if(id3==id2 || partner){
    const newJob = await Job.create(req.body)
    
    res.json({msg:'Job was created successfully', data: newJob})
    
    const x= await funcs.getJobs()
    const len=x.data.data.length
    const ids="5cbdd7f5d390fa5364e17d90"
    const jid=x.data.data[len - 1]._id
    axios.put(`http://localhost:5000/api/partners/${id3}/vac/${jid}`) 
    
    console.log(jid)
    }

   else{
      res.status(401).json({ err: "Not authorized "});
   }
   }
   catch(error) {
     
       console.log(error)
   }


    


})
// as a member I should be able to apply for a job
// router.put('/:jid/apply/:mid',async (req,res)=>{
//    const memberid = req.params.mid
//    const jobid = req.params.jid
//    const member = await Member.findById(memberid)
//    const job = await Job.findById(jobid)
//    if(!job) return res.status(400).send({ error:'job does not exist' })
//    if(!member) return res.status(400).send({ error:'member does not exist' })

//    Job.update(
//       {_id:jobid},
//       {$push: {applicants: memberid}}
//    )
//       res.json({msg:'applicant was added succsessfully', data:job})


// })
router.put('/:jid/apply/:mid', async (req, res) => {
  
   const jobID = req.params.id;
   const memberId = req.params.id;
   var job = await Job.findById(jobID);
   
   job.applicants.push(memberId);
  

   Job.findByIdAndUpdate(jobID, { applicants: job.applicants })
       .exec()
       .then(doc => { return res.redirect(303, `/api/jobs/${req.params.jid}`) })
       .catch(err => { console.log(err); return res.send(`Sorry, couldn't update a course with that id !`) });
      })



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
router.put('/:jid/applyx/:mid',async (req,res)=>{
   const memberid = req.params.mid
   const jobid = req.params.jid
   const member = await Member.findById(memberid)
   const job = await Job.findByIdAndUpdate(jobid,  {$push: {applicants: memberid}})
   if(!member) return res.status(400).send({ error:'member does not exist' })
   if(!job) return res.status(400).send({ error:'job does not exist' })
 
         res.json({msg:'applicant applied to the job succesfully', data:job})
   
   

})
//GET JOBS  A Partner Posted
router.get('/:pid/posted',async(req,res)=>{
   const partnerId = req.params.pid;
   const partnerx=await Partner.findById(partnerId)
   const jobs= await funcs.getJobs()
   
   if(!partnerx) return res.status(400).send({ error:'Partner does not exist' })
   const jobsp=[];
   
    for(var i=0;i<jobs.data.data.length;i++){
       if (jobs.data.data[i].partner===partnerx)
       jobsp.push(jobs.data.data[i])
       res.json({data: jobsp})
    }

   // const string = JSON.stringify(job);
   // const objectValue = JSON.parse(string);
   // const applicants = objectValue['applicants'];
   // const partner1 = objectValue['partner'];
   //  if (partner1!=partnerId)
   // return res.status(400).send({ error:'This job does not belong to that partner' })
   
   // res.json({applicants})
 })


module.exports = router
