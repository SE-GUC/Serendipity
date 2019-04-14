const express = require('express')
const router = express.Router()
const Joi = require('joi')
const uuid = require('uuid') 
const mongoose = require('mongoose')
const objectId = require('mongoose').objectid //needed to access by id
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey
const bcrypt = require('bcryptjs');
const EducationalOrganization = require('../../models/EducationalOrganization')
const validator = require('../../Validations/EduOrgValidations')

router.get('/', async (req,res) => {
    const educationalOrganizations = await EducationalOrganization.find().populate('courses').populate('masterClasses').populate('courses')
    res.json({data: educationalOrganizations})
})
///get masterclassesof this EduORg


router.get('/:id', async (req,res) => {
    
    try {
        const id = req.params.id
        
        const educationalOrganizations = await EducationalOrganization.findById(id).populate('masterClasses').populate('courses')
     //   const user = await book.reviews

        if(!educationalOrganizations) return res.status(404).send({error: 'educational organization does not exist'})
        
        res.json({data: educationalOrganizations})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    

 //   res.json({data: educationalOrganizations})
})
//updated creating an EDU ORG
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const { userName, email, name, password } = req.body;
		const eduOrg = await EducationalOrganization.findOne({ email }); //making sure email is unique
		if (eduOrg) return res.status(400).json({ email: 'Email already exists' });
		const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const newEducationalOrganization = new EducationalOrganization({
			userName,
			password: hashedPassword,
			email,
			name,
		});
		await EducationalOrganization.create(newEducationalOrganization);
     //const newEducationalOrganization = await EducationalOrganization.create(req.body);
     res.json({msg:'Educational organization was created successfully', data: newEducationalOrganization})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

// update Profile
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const eduorg = await EducationalOrganization.findById(id)
     const ID = {"_id":id}
     if(!eduorg) return res.status(404).send({error: 'eduorg does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedEduorg = await EducationalOrganization.findOneAndUpdate(ID,req.body)
     res.json({msg: 'EduOrg updated successfully',data:updatedEduorg})
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
///login trial
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken')
// const tokenKey = require('../../config/keys').secretOrKey
// router.post('/login', async (req, res) => {
// 	try {
// 		const { email, password } = req.body;
//         const eduOrg = await EducationalOrganization.findOne({ email });
// 		if (!eduOrg) return res.status(404).json({ email: 'Email does not exist' });
//         const match = bcrypt.compareSync(password, eduOrg.password);
//         console.log(match)
//         console.log(password)
//         console.log(eduOrg.password)
// 		if (match) {
//             const payload = {
//                 id: eduOrg.id,
//                 name: eduOrg.name,
//                 email: eduOrg.email
//             }
//             const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
//             return res.json({token: `Bearer ${token}`})
//         }
// 		else return res.status(400).send({ password: 'Wrong password' });
// 	} catch (e) {}
// });
//////
module.exports = router

// router.get('/:id/masterclasses' ,async (req,res)=>{

// })