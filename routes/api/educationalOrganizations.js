const express = require('express')
const Joi = require('joi')
const uuid = require('uuid') //not needed anymore
const mongoose = require('mongoose')
const objectId = require('mongoose').objectid //needed to access by id
const router = express.Router()

// We will be connecting using database 
const EducationalOrganization = require('../../models/EducationalOrganization')
const validator = require('../../validations/EduOrgValidations')
// temporary data created as if it was pulled out of the database ...
// const educationalOrganizations = [
//     new EducationalOrganization('GUC', 'GUC2', 'YIFIYF546', 'email',['df','wef'],['math','cs'],['df'],
//     ['salma','sama'],['dareen','omar'],['p1','p2'],'university',true,'1/1/2023'),
//     new EducationalOrganization('AUC', 'AUC', 'YIFAAAIYF546', 'emailA',['Adf','Awef'],['math3','cs2'],
//     ['dfRFG'], ['dareen','samah'],['mayar','nora'],['pr1','pr2'],'uni',true,'1/12/2023'),
// ];

//router.get('/', (req, res) => res.json({ data: educationalOrganizations }))

//salma
// router.get('/', (req, res) => {
//     let data = "";
//     educationalOrganizations.forEach((value) => {
//         const educationalOrganizations_id = value.id;
//         const educationalOrganizations_name = value.userName;
//         data += `<a href="/api/educationalOrganizations/${educationalOrganizations_id}">${educationalOrganizations_name}</a><br>`;
//     });
//     res.send(data);
// });
//yara to test get //works
router.get('/', async (req,res) => {
    const EduOrg = await EducationalOrganization.find()
    res.json({data: EduOrg})
})

router.get('/:id', (req, res) => {
    var data = "";
    educationalOrganizations.forEach((value) => {
        if(value.id === req.params.id) {
            data = `Id: ${value.id}<br>userName: ${value.userName}<br>name: ${value.name}<br>password: ${value.password}<br>email: ${value.email}<br>masterClasses: ${value.masterClasses}<br>courses: ${value.courses}
            <br>workshops: ${value.workshops}<br>trainers: ${value.trainers}
            <br>educators: ${value.educators}
            <br>trainingPrograms: ${value.trainingPrograms}
            <br>description: ${value.description}
            <br>contract: ${value.contract}
            <br>expirationDate: ${value.expirationDate}`;
            return;
        }
    });
    res.send(data || 'No educatioinal organization matches the requested id');
});
// //yara trial
// router.post('/', async (req,res) => {
//     try {
//      const isValidated = validator.createValidation(req.body)
//      if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
//      const newEduOrg = await EducationalOrganization.create(req.body)
//      res.json({msg:'EduOrg was created successfully', data: newEduOrg})
//     }
//     catch(error) {
//         // We will be handling the error later
//         console.log(error)
//     }  
//  })
//trial yara posting //works
router.post('/', async(req, res) => {
	try{
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newEducationalOrganization = await EducationalOrganization.create(req.body)
        //return res.json({ data: newEducationalOrganization })
        res.json({msg:'EduOrg Profile was created successfully', data: newEducationalOrganization})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    } 
});


//salma's post
//Creating an educational organization
// router.post('/', (req, res) => {
// 	const userName = req.body.userName;
//     const name = req.body.name;
//     const password = req.body.password;
//     const email = req.body.email;
//     const masterClasses = req.body.masterClasses;
//     const courses = req.body.courses;
//     const workshops = req.body.workshops;
//     const trainers = req.body.trainers;
//     const educators = req.body.educators;
//     const trainingPrograms = req.body.trainingPrograms;
//     const description = req.body.description;
//     const contract = req.body.contract;
//     const expirationDate = req.body.expirationDate;
    

//     const schema = {
// 		userName: Joi.string().min(3).required(),
//         name: Joi.string().required(),
//         password: Joi.string().required(),
//         email: Joi.string().required(),
//         masterClasses: Joi.array().items(),
//         courses: Joi.array().items(),
//         workshops: Joi.array().items(),
//         trainers: Joi.array().items(),
//         educators: Joi.array().items(),
//         trainingPrograms: Joi.array().items(),
//         description: Joi.string().required(),
//         contract: Joi.boolean().required(),
//         expirationDate: Joi.string().required()
//     }
    
//     const result = Joi.validate(req.body, schema);

// 	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

// 	const newEducationalOrganization = {
//         userName,
//         name,
//         password,
//         email,
//         masterClasses,
//         courses,
//         workshops,
//         trainers,
//         educators,
//         trainingPrograms,
//         description,
//         contract,
//         expirationDate,
// 		id: uuid.v4(),
//     };
//     educationalOrganizations.push(newEducationalOrganization)
    
// 	return res.json({ data: newEducationalOrganization });
// });

//yara update Profile
//only updates first tuple
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     
     const eduorg = await EducationalOrganization.findByIdAndUpdate(id)
    
     if(!eduorg) return res.status(404).send({error: 'Profile does not exist'+id})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedEdu = await EducationalOrganization.updateOne(req.body)
     res.json({msg: 'Profile updated successfully'+id, data : updatedEdu})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

//yara Delete  Works
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedEduOrgProfile = await EducationalOrganization.findByIdAndRemove(id)
     res.json({msg:'Profile was deleted successfully', data: deletedEduOrgProfile})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router

