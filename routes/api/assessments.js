const express = require('express')
const router = express.Router()

const Joi = require ('joi');
router.use(express.json())
// We will be connecting using database 
const Assessment = require('../../models/Assessment')

// temporary data created as if it was pulled out of the database ...
var assessments = [
    new Assessment('1','Peter','Slim Abdelnadher','CS1', 'GUC', '+2012345', 'Monday,Tuesday'),
    new Assessment('2','Liam','Aysha El-Safty','SE', 'GUC', '+2657764334', 'Saturday,Tuesday'),
    new Assessment('3','Talla','Alaa Abdelateef','Physics 1', 'GUC', '+45657834', 'Sunday'),
    new Assessment('4','Eleanor','Hany El-Sharkawy','Math 1', 'GUC', '+09876543', 'Monday,Wednesday'),
    new Assessment('5','Elizabeth','Yasser Hegazy','Circuits 2', 'GUC', '+87654324', 'Sunday, Tuesday'),
];
//get all assessments
router.get('', (req, res) => {
    res.send({data:Assessments})
})
//create a new assessment
router.post('/',  (req, res) => {
    const schema = {
    name : Joi.string().required(),
    expertName : Joi.string().required(),
    masterClass : Joi.string().required(),
    daysAvail : Joi.string().required(),
    phoneNumber : Joi.number().required()
        
    }

    
    const finalRes = Joi.validate (req.body, schema);
    
   if (finalRes.error) return res.status(400).send ({error: finalRes.error.details[0].message});
    const name = req.body.name
    const expertName = req.body.expertName
    const masterClass = req.body.masterClass
    const daysAvail = req.body.daysAvail
    const phoneNumber = req.body.phoneNumber
    
    const assessment = new Assessment (
        name,
        expertName,
        masterClass,
        daysAvail,
        phoneNumber
    )
    assessments.push (assessment)
    res.send(assessments)
});

router.put('/:id', (req, res) => {
    const schema = {
        name : Joi.string(),
        expertName : Joi.string(),
        masterClass: Joi.string(),
        daysAvail: Joi.string(),
        phoneNumber : Joi.number()
    }

const finalRes = Joi.validate (req.body, schema);
    if (finalRes.error) return res.status(400).send ({error: finalRes.error.details[0].message});
   const name = req.body.name
   const expertName = req.body.expertName
   const masterClass = req.body.masterClass
   const daysAvail = req.body.daysAvail
   const phoneNumber = req.body.phoneNumber
   const id = req.params.id;
    
    const assessment= assessments.find (assessment => assessment.id === id)
    
    if (name !== undefined)
        assessment.name = name
     if (expertName !== undefined)
        assessment.expertName = expertName
     if (masterClass !== undefined)
        assessment.masterClass = masterClass
     if (daysAvail !== undefined)
        assessment.daysAvail = daysAvail
     if (phoneNumber !== undefined)
        assessment.phoneNumber = phoneNumber
    
    res.send(assessments)
})

router.delete('/id:' , (req, res) => {
  
    const assessmentID = req.params.id
    const assessment = assessments.find(assessment => assessment.id === assessmentID)
    const i = assessments.indexOf (assessment)
    assessments.splice(i,1)
    res.send(assessments)
    
})

router.get ('/', (req,res) => res.json({ data: assessments}))
module.exports = router
