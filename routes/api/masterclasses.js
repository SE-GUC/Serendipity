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

const passport = require('passport');//for auth trial


// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200


// Get all masterclasses
router.get('/', async (req,res) => {
    const masterclases = await Masterclass.find().populate('courseIDs').populate('workshopsIDs').populate('applicants')
    res.json({data: masterclases})
})
// router.get('/:id', passport.authenticate('jwt', { session: false }),async(req, res) =>{

    

//     try {

//         const id = req.params.id;//id masterclass

//         const admin =await Admin.findById(req.user.id )

//         const nameofsignedineduorg=req.user.name // id logged in eduorg
//         const idofsignedineduorg=req.user.id // id logged in eduorg

// console.log(nameofsignedineduorg)

//         const master = await Masterclass.findById(id).populate('courseIDs').populate('workshopsIDs').populate('applicants')

//        if(!master) return res.status(404).send({error: 'Masterclass does not exist'})
//        console.log(master.Eduorganization)
//        console.log(nameofsignedineduorg)
//        console.log(master.id)
//        console.log(idofsignedineduorg)
//         if(master.Eduorganization==idofsignedineduorg){

//             console.log('yaraa')

//             res.json({data: master})

//     }

//     else {

//         res.status(401).json({ err: "Not authorized "});

//       }

         

//        }

//        catch(error) {

//            // We will be handling the error later

//            console.log(error)

//        }  

    



//     //res.json({data: master})

// })
//saaaaa7
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
router.put('/:id', passport.authenticate('jwt', { session: false }),async(req, res) =>{

    try {   const id = req.params.id;//id masterclass

        const admin =await Admin.findById(req.user.id )

        const nameofsignedineduorg=req.user.name // id logged in eduorg
        const idofsignedineduorg=req.user.id

console.log(nameofsignedineduorg)



       // const id = req.params.id
        const master = await Masterclass.findById(id)
        if(!master) return res.status(404).send({error: 'masterClass does not exist'})
        console.log(master.Eduorganization)
       console.log(nameofsignedineduorg)
        if(master.Eduorganization==idofsignedineduorg){

            console.log('yaraa')

        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const ID={"_id":id}
        const updatedMaster = await Masterclass.findOneAndUpdate(ID,req.body)
        res.json({msg: 'MasterClass updated successfully',
                  Data: updatedMaster
                })
             } else {

                    res.status(401).json({ err: "Not authorized "});
            
                  }

       }
       catch(error) {
           
           console.log(error)
       }  
    
})


router.delete('/:id', passport.authenticate('jwt', { session: false }),async(req, res) =>{
    
        const id = req.params.id;//id masterclass

        const admin =await Admin.findById(req.user.id )
id2=''
if(!admin){
    id2=""
}
else{
    id2=admin._id
}
const id3=req.user.id// id signed in
const master = await Masterclass.findById(id)
console.log(id3)
console.log(master.Eduorganization)
if(id3==id2 || id3==master.Eduorganization){
    try {
        const id = req.params.id;
     const deletedMaster = await Masterclass.findByIdAndRemove(id)
     res.json({msg:'masterclass was deleted successfully', data: deletedMaster})
    }
    
 

    catch(error) {
        
        console.log(error)
    } 
} 
else{
    res.status(401).json({err:"Not authorized"})
}
 
 })


 // as a member i can apply for a masterclass
//  router.put('/:jid/apply/:mid',async (req,res)=>{
//     const memid = req.params.mid
//     const mastid = req.params.jid
//     const member = await Member.findById(memid)
//     const job = await Masterclass.findByIdAndUpdate(mastid,  {$push: {applicants: memid}})
//     if(!member) return res.status(400).send({ error:'member does not exist' })
//     if(!job) return res.status(400).send({ error:'job does not exist' })
  
//           res.json({msg:'applicant applied to the job succesfully', data:job})
    
    
 
//  })
router.put('/:id/apply', passport.authenticate('jwt', { session: false }), async (req, res) => {
    console.log('hnaaSmsm')
    console.log(req.body.applicantId)
    console.log('hnaaSmsm')
    console.log("apply course")
   
    console.log(req.params.id)
const member=await member.findById(req.body.applicantId)
if(member){



    const isValidated = validator.applyValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });

    const applicantId = req.body.applicantId;
    const courseId = req.params.id;
    console.log(courseId)
    var course = await Masterclass.findById(courseId);
    if (!course) return res.json({ error: 'masterclass does not exist' })

    console.log('one')
    console.log(course)

    course.applicants.push(applicantId);
    console.log('two')

    Masterclass.findByIdAndUpdate(courseId, { applicants: course.applicants })
        .exec()
        .then(doc => { return res.redirect(303, `/api/masterclasses/${req.params.id}`) })
        .catch(err => { console.log(err); return res.send(`Sorry, couldn't update a course with that id !`) });

    console.log('one')
}
else{
    res.json({err:"you are not authorized"})
}

})
//  router.put("/:maid/apply/:mid",async(req,res)=>{
//     console.log("apply masterclasses")

//     const memberid=req.params.mid
//     const masterclassid=req.params.maid
//     console.log(memberid)
//     console.log(masterclassid)

//     const member=await Member.findById(memberid)
//     const master=await Masterclass.findById(masterclassid)
//     if(!member) return res.status(400).send({error:'member does not exist'})
//     if(!master) return res.status(400).send({error:'master does not exist'})

//     Masterclass.update(
//         {_id:masterclassid},
//         {$push:{applicants:memberid}},
//         res.json({msg:'applicants was added successfuly',data:master})
//     )

// }
// )







module.exports = router;

