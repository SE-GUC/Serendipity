const express = require('express');
const axios = require('axios');
//const Joi = require('joi');
//const uuid = require('uuid');
const router = express.Router();
const mongoose = require('mongoose')
const Job = require('../../models/Job')
const Partner = require('../../models/Partner')
const Member = require('../../models/Member')
const EduOrg = require('../../models/EducationalOrganization')
//const validator = require('../../validations/jobValidations')
router.use(express.json())
// We will be connecting using database 
const Admin = require('../../models/Admin')
const validator = require('../../Validations/AdminValidations')
const passport = require('passport');


const funcs = require('../../fn');
//import axios from 'axios';





router.get('/',async (req,res) => {
    
    
       
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



 router.put('/:id',passport.authenticate('jwt', { session: false }), async (req,res) => {
    try {
        const signedin = req.user.id
        const admin2=await Admin.findById(req.user.id )
        console.log(admin2)
        
        if(admin2){
            const adminid = admin2.id
             console.log(adminid)
             console.log(req.params.id)
            if(adminid===req.params.id || admin2.super==="yes"){

        console.log('in')
       // res.status(404).send({error: 'Unauthorized'})
     
     const id = req.params.id
     const admin = await Admin.findById(id)
     const ID = {"_id":id}
     if(!admin) return res.status(404).send({error: 'Admin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAdmin = await Admin.findOneAndUpdate(ID,req.body)
     res.json({msg: 'Admin updated successfully',data:updatedAdmin})
    }
   
}
    else
res.status(404).send({error: 'Unauthorized'})
}

    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
 })


 router.delete('/:id',passport.authenticate('jwt', { session: false }), async (req,res) => {
    try {
        const signedin = req.user.id
        const admin2=await Admin.findById(req.user.id )
        
        if(admin2){
            const adminid = admin2.id
             console.log(adminid)
             console.log(req.params.id)
            if(adminid===req.params.id || admin2.super==="yes"){
                console.log("in")
     const id = req.params.id
     const deletedAdmin = await Admin.findByIdAndRemove(id)
     res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
    }
}
else
res.json({err: "Unauthorized"})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })



 // as an admin i can get all pending jobs




 router.get('/p/pendingjobs',passport.authenticate('jwt', { session: false }), async (req,res) => {
   try{
     //  const signedin = req.user.id
       const admin2=await Admin.findById(req.user.id )
       //console.log(admin2)
       if(admin2){
    const jobs = await funcs.getJobs()
    
   
     
         const jobspending =[]
        
         for(var i=0;i<jobs.data.data.length;i++){
           
             if(jobs.data.data[i].state==="pending")
            jobspending.push(jobs.data.data[i])}
            res.json({data: jobspending})
           
         }
         else
        res.status(404).send({error: 'Unauthorized'})
        }
        
         catch(error) {
      
            console.log(error)
        }  
      
    
     
    
    
  
    

    //res.json({data: jobs})}

   
 })

 // approve or reject a pending job
 router.put('/approverejectjob/:id',passport.authenticate('jwt', { session: false }),async(req,res)=>{
    const admin2=await Admin.findById(req.user.id )
    //console.log(admin2)
    if(admin2){
console.log('in')
    const id = req.params.id
     const job = await Job.findById(id)
     const ID = {"_id":id}
     if(!job) return res.status(404).send({error: 'job does not exist'})
     //const isValidated = validator.updateValidation(req.body)
     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedjob = await Job.findOneAndUpdate(ID,req.body)
     res.json({msg: 'Job updated successfully',data:updatedjob})
    }
    else
    res.status(404).send({error: 'Unauthorized'})
}

  



)


// get pending registered partners 
router.get('/p/pendingpartners',passport.authenticate('jwt', { session: false }), async (req,res) => {
    try{
        const admin2=await Admin.findById(req.user.id )
        //console.log(admin2)
        if(admin2){
     const partners = await funcs.getPartners()
     
    
      
          const partnerspending =[]
         
          for(var i=0;i<partners.data.data.length;i++){
            
              if(partners.data.data[i].registered==="no")
             partnerspending.push(partners.data.data[i])}
             res.json({data: partnerspending})
            
          }
          else
          res.status(404).send({error: 'Unauthorized'})
        }
          catch(error) {
       
             console.log(error)
         }  
       
     
      
     
     
   
     
 
     //res.json({data: jobs})}
 
    
  })

// get pending members to register

  router.get('/p/pendingmembers',passport.authenticate('jwt', { session: false }), async (req,res) => {
    try{
        const admin2=await Admin.findById(req.user.id )
        //console.log(admin2)
        if(admin2){
     const members = await funcs.getMembers()
     
    
      
          const memberspending =[]
         
          for(var i=0;i<members.data.data.length;i++){
            
              if(members.data.data[i].registered==="no")
             memberspending.push(members.data.data[i])}
             res.json({data: memberspending})
            
          }
          else
          res.status(404).send({error: 'Unauthorized'})
        }
          catch(error) {
       
             console.log(error)
         }  
       
     
      
     
     
   
     
 
     //res.json({data: jobs})}
 
    
  })


  // get pending eduorg to register

  router.get('/p/pendingeduorg',passport.authenticate('jwt', { session: false }), async (req,res) => {
    try{
        const admin2=await Admin.findById(req.user.id )
        //console.log(admin2)
        if(admin2){
        
     const eduorgs = await funcs.getEduOrg()
     
    
      
          const eduorgspending =[]
         
          for(var i=0;i<eduorgs.data.data.length;i++){
            
              if(eduorgs.data.data[i].registered==="no")
             eduorgspending.push(eduorgs.data.data[i])}
             res.json({data: eduorgspending})
            
          }
          else
          res.status(404).send({error: 'Unauthorized'})
        }
          catch(error) {
       
             console.log(error)
         }  
       
     
      
     
     
   
     
 
     //res.json({data: jobs})}
 
    
  })


  
// approve or reject a pending partner

  router.put('/arpartner/:id',passport.authenticate('jwt', { session: false }),async(req,res)=>{
    const admin2=await Admin.findById(req.user.id )
    //console.log(admin2)
    if(admin2 && admin2.super==="yes"){
    const id = req.params.id
     const partner = await Partner.findById(id)
     const ID = {"_id":id}
     if(!partner) return res.status(404).send({error: 'job does not exist'})
     //const isValidated = validator.updateValidation(req.body)
     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedpartner = await Partner.findOneAndUpdate(ID,req.body)
     res.json({msg: 'Job updated successfully',data:updatedpartner})
    }
    else
    res.status(404).send({error: 'Unauthorized'})

}

  



)


// approve or reject a pending partner

router.put('/armember/:id',passport.authenticate('jwt', { session: false }),async(req,res)=>{
    const admin2=await Admin.findById(req.user.id )
    //console.log(admin2)
    if(admin2 && admin2.super==="yes"){

    const id = req.params.id
     const member = await Member.findById(id)
     const ID = {"_id":id}
     if(!member) return res.status(404).send({error: 'member does not exist'})
     //const isValidated = validator.updateValidation(req.body)
     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedmember = await Member.findOneAndUpdate(ID,req.body)
     res.json({msg: 'Member updated successfully',data:updatedmember})
    }
    else
    res.status(404).send({error: 'Unauthorized'})
}


  



)

// get pending eduorg to register

  router.get('/p/pendingeduorg',passport.authenticate('jwt', { session: false }), async (req,res) => {
    try{
        const admin2=await Admin.findById(req.user.id )
    //console.log(admin2)
    if(admin2){
     const eduorgs = await funcs.getEduOrg()
     
    
      
          const eduorgspending =[]
         
          for(var i=0;i<eduorgs.data.data.length;i++){
            
              if(eduorgs.data.data[i].registered==="no")
             eduorgspending.push(eduorgs.data.data[i])}
             res.json({data: eduorgspending})
            
          }
          else
          res.status(404).send({error: 'Unauthorized'})
        }
          catch(error) {
       
             console.log(error)
         }  
       
     
      
     
     
   
     
 
     //res.json({data: jobs})}
 
    
  })


  // get pending admins approved by super admin to register

  router.get('/p/pendingadmins',passport.authenticate('jwt', { session: false }), async (req,res) => {
    try{
        const admin2=await Admin.findById(req.user.id )
        //console.log(admin2)
        if(admin2){
     const admins = await funcs.getAdmins()
     
    
      
          const adminspending =[]
         
          for(var i=0;i<admins.data.data.length;i++){
            
              if(admins.data.data[i].registered==="no" && admins.data.data[i].super!=="yes")
             adminspending.push(admins.data.data[i])}
             res.json({data: adminspending})
            
          }
          else
          res.status(404).send({error: 'Unauthorized'})

        }
          catch(error) {
       
             console.log(error)
         }  
       
     
      
     
     
   
     
 
     //res.json({data: jobs})}
 
    
  })


  
// approve or reject a pending partner

  router.put('/arpartner/:id',passport.authenticate('jwt', { session: false }),async(req,res)=>{
    const admin2=await Admin.findById(req.user.id )
    //console.log(admin2)
    if(admin2 && admin2.super==="yes"){
    const id = req.params.id
     const partner = await Partner.findById(id)
     const ID = {"_id":id}
     if(!partner) return res.status(404).send({error: 'job does not exist'})
     //const isValidated = validator.updateValidation(req.body)
     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedpartner = await Partner.findOneAndUpdate(ID,req.body)
     res.json({msg: 'Job updated successfully',data:updatedpartner})
    }
    else
    res.status(404).send({error: 'Unauthorized'})

}

  



)


// approve or reject a pending partner

router.put('/armember/:id',passport.authenticate('jwt', { session: false }),async(req,res)=>{
    const admin2=await Admin.findById(req.user.id )
    //console.log(admin2)
    if(admin2 && admin2.super==="yes"){
    const id = req.params.id
     const member = await Member.findById(id)
     const ID = {"_id":id}
     if(!member) return res.status(404).send({error: 'member does not exist'})
     //const isValidated = validator.updateValidation(req.body)
     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedmember = await Member.findOneAndUpdate(ID,req.body)
     res.json({msg: 'Member updated successfully',data:updatedmember})
    }
    else
    res.status(404).send({error: 'Unauthorized'})

}

  



)

// approve or reject a pending eduorg
router.put('/areduorg/:id',passport.authenticate('jwt', { session: false }),async(req,res)=>{
    const admin2=await Admin.findById(req.user.id )
    //console.log(admin2)
    if(admin2 && admin2.super==="yes"){
    const id = req.params.id
     const eduorg = await EduOrg.findById(id)
     const ID = {"_id":id}
     if(!eduorg) return res.status(404).send({error: 'EduOrg does not exist'})
     //const isValidated = validator.updateValidation(req.body)
     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatededuorg = await EduOrg.findOneAndUpdate(ID,req.body)
     res.json({msg: 'EduOrg updated successfully',data:updatededuorg})
    }
    else
    res.status(404).send({error: 'Unauthorized'})

}

  



)


// approve or reject a pending eduorg
router.put('/aradmins/:id',passport.authenticate('jwt', { session: false }),async(req,res)=>{
    const admin2=await Admin.findById(req.user.id )
    //console.log(admin2)
    if(admin2 && admin2.super==="yes"){
    const id = req.params.id
     const admin = await Admin.findById(id)
     const ID = {"_id":id}
     if(!admin) return res.status(404).send({error: 'Admin does not exist'})
     //const isValidated = validator.updateValidation(req.body)
     //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedadmin = await Admin.findOneAndUpdate(ID,req.body)
     res.json({msg: 'Admin updated successfully',data:updatedadmin})
    }
    else
    res.status(404).send({error: 'Unauthorized'})
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
