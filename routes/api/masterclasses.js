const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const mongoose = require('mongoose')


const router = express.Router();
router.use(express.json())
// Models
const Masterclass = require('../../models/Masterclass');
//requiring courses model for viewing 
const Course = require('../../models/Course');
const Workshop = require('../../models/Workshop');
const EducationalOrganization = require('../../models/EducationalOrganization')
const validator = require('../../Validations/masterClassValidations')



// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200


// Get all masterclasses
router.get('/', async (req, res) => {
    const masterclases = await Masterclass.find().populate('courseIDs').populate('workshopsIDs').populate('applicants')
    res.json({ data: masterclases })
})

router.get('/:id', async (req, res) => {

    try {
        const id = req.params.id

        const master = await Masterclass.findById(id).populate('courseIDs').populate('workshopsIDs').populate('applicants')


        if (!master) return res.status(404).send({ error: 'Masterclass does not exist' })

        res.json({ data: master })
    }
    catch (error) {
        // We will be handling the error later
        console.log(error)
    }


    //res.json({data: master})
})
//create
router.post('/', async (req, res) => {
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newMaster = await Masterclass.create(req.body)
        res.json({ msg: 'MasterClass was created successfully', data: newMaster })
    }
    catch (error) {
        console.log(error)
    }
});

// Update a masterclass 
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const master = await Masterclass.findById(id)
        if (!master) return res.status(404).send({ error: 'masterClass does not exist' })
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const ID = { "_id": id }
        const updatedMaster = await Masterclass.findOneAndUpdate(ID, req.body)
        res.json({
            msg: 'MasterClass updated successfully',
            Data: updatedMaster
        })
    }
    catch (error) {

        console.log(error)
    }

})


router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deletedMaster = await Masterclass.findByIdAndRemove(id)
        res.json({ msg: 'masterclass was deleted successfully', data: deletedMaster })
    }
    catch (error) {

        console.log(error)
    }

})


// as a member i can apply for a masterclass
router.put("/:maid/apply/:mid", async (req, res) => {
    const memberid = req.params.mid
    const masterclassid = req.params.maid
    const member = await Member.findById(memberid)
    const master = await Masterclass.findById(masterclassid)
    if (!member) return res.status(400).send({ error: 'member does not exist' })
    if (!master) return res.status(400).send({ error: 'master does not exist' })

    Masterclass.update(
        { _id: masterclassid },
        { $push: { applicants: memberid } },
        res.json({ msg: 'applicants was added successfuly', data: master })
    )

}
)

router.get('/:id/applicants', async (req, res) => {
    try {
        const id = req.params.id
        const masterclass = await Masterclass.findById(id)
        if (!masterclass) return res.json({ err: 'masterclass does not exist' })
        const applicants = masterclass.applicants;
        var members = [];
        for(let i = 0;i<applicants.length;++i){
            const mem = await Member.findById(applicants[i])
            if (mem)
            members.push(mem)
        }
        res.json({ data: members })
    }
    catch (error) {
        res.json({ err: "Could not find a masterclass with this id" })
    }


})
router.get('/:eduOrg/getByName/:title', async (req, res) => {

    try {
        const eduOrg = req.params.eduOrg
        console.log(eduOrg)
        const title = req.params.title
        console.log(title)
        const masterclasss = await Masterclass.find()
        for (var i = 0; i < masterclasss.length; i++) {

            if (masterclasss[i].title === title && masterclasss[i].Eduorganization === eduOrg){
                res.json({ data: masterclasss[i]})
            }
        }
        
        res.json({ err: "no course with this info" })
    }

    catch (error) {
        res.json({ err: "something isn't right" })
    }

})

router.put('/:id/apply', async (req, res) => {

    console.log("yhyyyyyyyyyyy")
    const isValidated = validator.applyValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });

    const applicantId = req.body.applicantId;
    const masterclassId = req.params.id;
    var masterclass = await Masterclass.findById(masterclassId);
    console.log('one')
    masterclass.applicants.push(applicantId);
    console.log('two')

    Masterclass.findByIdAndUpdate(masterclassId, { applicants: masterclass.applicants })
        .exec()
        .then(doc => { return res.redirect(303, `/api/masterclasses/${req.params.id}`) })
        .catch(err => { console.log(err); return res.send(`Sorry, couldn't update a masterclass with that id !`) });

    console.log('one')

})

router.put('/:id/unApply', async (req, res) => {
    console.log("yhyyyyyyyyyyy")
    const isValidated = validator.applyValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });

    const applicantId = req.body.applicantId;
    const masterclassId = req.params.id;
    var masterclass = await Masterclass.findById(masterclassId);
    console.log('one')
    var app = masterclass.applicants
    var index = app.indexOf(applicantId);
    if (index > -1) {
        app.splice(index, 1);
      }
    console.log('two')

    Masterclass.findByIdAndUpdate(masterclassId, { applicants: app })
        .exec()
        .then(doc => { return res.redirect(303, `/api/masterclasses/${req.params.id}`) })
        .catch(err => { console.log(err); return res.send(`Sorry, couldn't update a masterclass with that id !`) });

    console.log('one')

})




module.exports = router;

