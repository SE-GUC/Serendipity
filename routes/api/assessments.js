const express = require('express')
const Joi = require ('joi');
const router = express.Router()

router.use(express.json())
// We will be connecting using database 
const Assessment = require('../../models/Assessment')

// temporary data created as if it was pulled out of the database ...
var assessments = [
    new Assessment('Peter','Slim Abdelnadher','CS1', 'GUC', '+2012345', 'Monday,Tuesday'),
    new Assessment('Liam','Aysha El-Safty','SE', 'GUC', '+2657764334', 'Saturday,Tuesday'),
    new Assessment('Talla','Alaa Abdelateef','Physics 1', 'GUC', '+45657834', 'Sunday'),
    new Assessment('Eleanor','Hany El-Sharkawy','Math 1', 'GUC', '+09876543', 'Monday,Wednesday'),
    new Assessment('Elizabeth','Yasser Hegazy','Circuits 2', 'GUC', '+87654324', 'Sunday, Tuesday'),
];
//get all assessments
router.get('', (req, res) => {
    res.send({data:assessments})//yara changed here
})
//create a new assessment
router.post('/',(req, res) => {
    const schema = {
    memberName : Joi.string().required(),
    expertName : Joi.string().required(),
    masterClass : Joi.string().required(),
    educationalOrg:Joi.string().required(),
    phoneNumber : Joi.number().required(),
    daysAvailable : Joi.string().required()
        
    }

    
    const finalRes = Joi.validate (req.body, schema);
    
   if (finalRes.error) return res.status(400).send ({error: finalRes.error.details[0].message});
    const memberName = req.body.memberName
    const expertName = req.body.expertName
    const masterClass = req.body.masterClass
    const educationalOrg = req.body.educationalOrg
    const phoneNumber = req.body.phoneNumber
    const daysAvailable = req.body.daysAvailable 
    
    const assessment = new Assessment (
        memberName,
        expertName,
        masterClass,
        educationalOrg,
        phoneNumber,
        daysAvailable 
    )
    assessments.push (assessment)
    res.send(assessments)
});

router.put('/:id', (req, res) => {
    const schema = {
        memberName: Joi.string(),
        expertName : Joi.string(),
        masterClass: Joi.string(),
        daysAvailable: Joi.string(),
        phoneNumber : Joi.number(),
        educationalOrg:Joi.string()
    }

    const finalRes = Joi.validate (req.body, schema);
    if (finalRes.error) return res.status(400).send ({error: finalRes.error.details[0].message});
   
   const memberName = req.body.memberName
   const expertName = req.body.expertName
   const masterClass = req.body.masterClass
   const educationalOrg = req.body.educationalOrg
   const daysAvailable  = req.body.daysAvailable 
   const phoneNumber = req.body.phoneNumber
   const id = req.params.id;
    
    const assessment= assessments.find (assessment => assessment.id === id)
    
    if (memberName !== undefined)
        assessment.memberName = memberName
     if (expertName !== undefined)
        assessment.expertName = expertName
     if (masterClass !== undefined)
        assessment.masterClass = masterClass
     if (daysAvailable  !== undefined)
        assessment.daysAvailable  = daysAvailable 
     if (phoneNumber !== undefined)
        assessment.phoneNumber = phoneNumber
    if (educationalOrg !== undefined)
        assessment.educationalOrg = educationalOrg
    
    res.send(assessments)
})

router.delete('/:id' , (req, res) => {
  
    const assessmentID = req.params.id
    const assessment = assessments.find(assessment => assessment.id === assessmentID)
    const i = assessments.indexOf (assessment)
    assessments.splice(i,1)
    res.send(assessments)
    
})

router.get ('/', (req,res) => res.json({ data: assessments}))

module.exports = router;
