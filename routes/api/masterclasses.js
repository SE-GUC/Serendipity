// Dependencies
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
const validator = require('../../validations/masterClassValidations')



// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200


// Get all masterclasses
// router.get('/', async (req,res) => {
//     const masterclases = await Masterclass.find()
//     res.json({data: masterclases})
// })


// // Get a certain MasterClass
// router.get('/:id', async (req, res) => {
//     const id =req.params.id
//     const master=await Masterclass.findById(id)
    
//     res.json(master || 'No masterclass matches the requested id');
// });



// Get all masterclasses
router.get('/', async(req, res) => {
    let data = "";
    const masterclasses = await Masterclass.find()    
    masterclasses.forEach((value) => {
        const masterclassid = value.id;
        const masterclasstitle = value.title;
        data += `<a href="/api/masterclasses/${masterclassid }">${masterclasstitle}</a><br>`;
    });
    res.send(data);
});
// Get a certain MasterClass
router.get('/:id', async(req, res) => {
    var data = "";
    const masterclasses = await Masterclass.find()
    var allworkshops=[]
    //allCourses.push({ID:"yara hena"})
    // const c= await Course.find()
    // const w= await Workshop.find()
    var i=0;
    const allCourses=[]
    masterclasses.forEach(async value => {
       try{
        if(value.id === req.params.id) {
            value.courseIDs.forEach(async CourseId => {
                const  curr=await Course.findById({'_id':CourseId})
                if(curr)
                {
                    
                    allCourses[i]=(curr)
                    i++
                }
                console.log(allCourses)
            });
            
            value.workshopsIDs.forEach(async workshopId => {
                const curr1=await Workshop.findById(workshopId)
                if(curr1)
                allworkshops.put(curr1)
            });
            console.log(allCourses)
            //const educationalOrganization= await EducationalOrganization.findById(value.Eduorganizationid)
            data+= `Id: ${value.id}<br>Name: ${value.title}<br>eduOrganisation: ${value.Educationalorganization}<br>duration: ${value.duration}<br>price: ${value.price}<br>description: ${value.description}<br>location: ${value.location}<br>workshops: ${allworkshops}<br>courses: ${value.courseIDs}`;
            // return;
        }
    }catch(error)
    {
        console.log("error")
    }
    });
    res.send(data || 'No masterclass matches the requested id');
});








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
router.put('/:id', async(req, res) => {
    try {
        const id = req.params.id
        const master = await Masterclass.findById(id)
        if(!master) return res.status(404).send({error: 'masterClass does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const ID={"_id":id}
        const updatedMaster = await Masterclass.findOneAndUpdate(ID,req.body)
        res.json({msg: 'MasterClass updated successfully',
                  Data: updatedMaster
                })
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    
})






// Delete a masterclass
router.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id
        const deletedMaster = await Masterclass.findByIdAndRemove(id)
        var allCourses=[]
        var allworkshops=[]
        
        if(!deletedMaster) return res.status(404).send({error: 'masterClass does not exist'})

        if(deletedMaster.id === req.params.id) {
            deletedMaster.courseIDs.forEach(async CourseId => {
                const curr=await Course.findById(CourseId)
                if(curr)
                allCourses.put(curr)
            });
            deletedMaster.workshopsIDs.forEach(async workshopId => {
                const curr=await Workshop.findById(workshopId)
                if(curr)
                allworkshops.put(curr)
            });
            //const educationalOrganization= await EducationalOrganization.findById(value.Eduorganizationid)
            
             data = `Id: ${deletedMaster.id}<br>Name: ${deletedMaster.title}<br>eduOrganisation: ${deletedMaster.EducationalOrganization}<br>duration: ${deletedMaster.duration}<br>price: ${deletedMaster.price}<br>description: ${deletedMaster.description}<br>location: ${deletedMaster.location}<br>workshops: ${allworkshops}<br>courses: ${allCourses}`;
             //return;

        }

       
        res.json({msg:'MasterClass was deleted successfully',data:deletedMaster})
       }
       catch(error) {
           console.log(error)
       }  
        
})







module.exports = router;
