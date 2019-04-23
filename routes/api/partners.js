const express = require('express');
//const Joi = require('joi');
const Partner = require('../../models/Partner');
const router= express.Router();

const validator = require('../../Validations/partnerValidations')
const bcrypt = require('bcryptjs');

const passport = require('passport');//for auth trial /////***


//const partners= require('./partners');
const mongoose = require('mongoose');
//const validator = require('../../validations/partnerValidations');

//CREATE PARTNER
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send("Only name,email and password are required when signing up" /*{ error: isValidated.error.details[0].message }*/)
     const {email, name, password} = req.body;
		 const p1 = await Partner.findOne({ email }); //making sure email is unique
		 if (p1) return res.status(400).json({ email: 'Email already exists' });
     const salt = bcrypt.genSaltSync(10);
     const hashedPassword = bcrypt.hashSync(password, salt);
     const newPartner = new Partner({
      email,
      name,
      password: hashedPassword,
    });
      await Partner.create(newPartner);
     res.json({msg:'Partner was created successfully', data: newPartner})
    }
 
    catch(error) { 
        console.log(error)
    }  
 
 })

//GET ALL PARTNERS
router.get('/', async (req,res) => {
    const partners = await Partner.find().populate('jobs')
    res.json({data: partners})
})

//GET SINGLE PARTNER
router.get("/:_id",passport.authenticate('jwt', { session: false }),async (req, res) => {
    const id = req.params._id;
    const admin = await Admin.findById(req.user.id )
    id2=''
    if(!admin){
      id2="";
   }
   else{
      id2=admin._id;
   }
   const id3=req.user._id
   if(id3==id2 || id3==id) {
     Partner.findById(id).populate('jobs')
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
    } else {
      res.status(401).json({ err: "Not authorized "});
    }
  });

//UPDATE A PARTNER
router.put('/:_id',passport.authenticate('jwt', { session: false }),async(req, res) =>{
  const id = req.params._id;
    const admin =await Admin.findById(req.user.id )
    id2=''
    if(!admin){
       id2="";
    }
    else{
       id2=admin._id;
    }
    const id3=req.user.id
    if(id3==id2 || id3==id) {
         const isValidated = validator.updateValidation(req.body)
         if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        else{
        const {email} = req.body;
        const p1 = await Partner.findOne({ email }); //making sure email is unique
        if (p1) return res.status(400).json({ email: 'Email already exists' });     
        await Partner.findByIdAndUpdate(req.params._id, req.body) 
         .exec()
         .then(r => {return res.redirect(303, `/api/partners/${req.params._id}`) })
         .catch(err => {console.log(err); return res.status(400).send("No partner found for provided ID") })
        }
    }
    else {
      res.status(401).json({ err: "Not authorized "});
    } 
     })
 
//DELETE A PARTNER
router.delete('/:id', passport.authenticate('jwt', { session: false }),async(req, res) =>{
  const id = req.params.id;
    const admin =await Admin.findById(req.user.id )
    id2=''
    if(!admin){
       id2="";
    }
    else{
       id2=admin._id;
    }
    const id3=req.user.id
    if(id3==id2 || id3==id) {
  try {
     const id = req.params.id
     const deletedPartner = await Partner.findByIdAndRemove(id)
     res.json({msg:'Partner was deleted successfully', data: deletedPartner})
    }
    catch(error) {
        console.log(error)
    }
  } 
  else {
    res.status(401).json({ err: "Not authorized "});
  } 
 })

//GET APPLICANTS FOR A POSTED JOB
router.get('/:pid/applicants/:jid',async(req,res)=>{
  const partnerId = req.params.pid;
  const jobId = req.params.jid;
  const job = await Job.findById(jobId);
  if(!job) return res.status(400).send({ error:'Job does not exist' })
const c= await job.applicants
const x=[];
  //const c=await  Job.findById(f[0])
  for(let i=0;i<c.length;i++){
  x.push( await Member.findById(c[i]))
  }
  // const string = JSON.stringify(job);
  // const objectValue = JSON.parse(string);
  // const applicants = objectValue['applicants'];
  // const partner1 = objectValue['partner'];
  //  if (partner1!=partnerId)
  // return res.status(400).send({ error:'This job does not belong to that partner' })
  
  res.json({x})
})

//add to the vacanies//noura
// router.put('/:pid/vac/:jid',async (req,res)=>{
//   const partnerid = req.params.pid
//   const jobid = req.params.jid
//   const job = await Job.findById(jobid)
//   console.log(jobid)
//   console.log(partnerid)

//   const partner = await Partner.findByIdAndUpdate(partnerid,  {$push: {vacanies: jobid}})
//   if(!partner) return res.status(400).send({ error:'partner does not exist' })
//   if(!job) return res.status(400).send({ error:'job does not exist' })

//         res.json({msg:'job added to vacanies', data:partner})
  
  

// })
router.put('/:pid/vac/:jid', async (req, res) => {
  

  // const isValidated = validator.applyValidation(req.params.jid)
  // if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });

  const jobId =req.params.jid;
  const partnerId = req.params.pid;
  var partner = await Partner.findById(partnerId);
  console.log(jobId)
  partner.vacancies.push(jobId);
  console.log(partnerId)

  Partner.findByIdAndUpdate(partnerId, { vacancies: partner.vacancies })
      .exec()
      .then(doc => { return res.redirect(303, `/api/partners/${req.params.pid}`) })
     
  console.log('one')

})

//GET jobs for a certain partner//noura
router.get('/:pid/jobs',async(req,res)=>{

  
  const partnerId = req.params.pid;
  const partner= await Partner.findById(partnerId)
   if(!partner) return res.status(400).send({ error:'Partner does not exist' })

  const f= await partner.vacancies
  const x=[];
  //const c=await  Job.findById(f[0])
  for(let i=0;i<f.length;i++){
  x.push( await Job.findById(f[i]))
  }
  res.json({x})
})

module.exports = router;
