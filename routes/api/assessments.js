const express = require ('express')
const mongoose = require('mongoose')
const router = express.Router()
router.use(express.json())
const Assessment = require('../../models/Assessment')
router.post ('/', (req,res) => {
    const schema = {
    memberName : Joi.string().required(),
    expertName : Joi.string().required(),
    masterClass : Joi.string().required(),
    educationalOrg :Joi.string().required(), 
    phoneNumber : Joi.number().required(),
    daysAvailable : Joi.string().required()
    }
})


const result = Joi.validate(req.body, schema);
if (result.error) return res.status(400).send({ error: result.error.details[0].message });
else {
    new Assessment({
        ID : mongoose.Types.ObjectId(),
        memberName : req.body.memberName,
        expertName : req.body.expertName,
        masterClass : req.body.masterClass,
        educationalOrg :req.body.educationalOrg, 
        phoneNumber : req.body.phoneNumber,
        daysAvailable : req.body.daysAvailable
    }).save()
    .then(res.redirect ('/api/assessments'))
    .catch (err => { console.log(err); return res.send(`Sorry, could not create a new appointment to an assessment.`) })

}

const schema = {
    memberName : Joi.string(),
    expertName : Joi.string(),
    masterClass : Joi.string(),
    educationalOrg :Joi.string(), 
    phoneNumber : Joi.number(),
    daysAvailable : Joi.string()
}

const result = Joi.validate(req.body, schema);
if (result.error) return res.status(400).send({ error: result.error.details[0].message });
else{
    Assessment.findByIdAndUpdate (req.params.id, req.body)
    .exec()
    .then(r => {return res.redirect(303, '/api/assessments/${req.params.id}')})
    .catch (err => {console.log(err); return res.send(`Sorry, couldn't update a course with that id !`) })
}

router.delete('/:id', (req,res) => 
{
    const assessID = req.params.id
    res.send(assessments)
})



module.exports = router