const express = require('express')
const Joi = require('joi');
const mongoose = require('mongoose')
const router = express.Router()
router.use(express.json())





const validator = require('../../Validations/CourseValidations')
const Course = require('../../models/Course')
const Member = require('../../models/Member')
const funcs=require('../../fn');
const passport = require('passport');//for auth trial
//const Member
router.post('/', async (req, res) => {
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });
        else {
            await new Course({
                _id: mongoose.Types.ObjectId(),
                title: req.body.title,
                eduOrganisation: req.body.eduOrganisation,
                duration: req.body.duration,
                educator: req.body.educator,
                price: req.body.price,
                description: req.body.description,
                location: req.body.location,
                applicants: req.body.applicants
            }).save()
                .then(res.redirect('/api/courses'))
                .catch(err => { console.log(err); return res.send(`Sorry, could not create a new course with this data !`) })

        }
    }
    catch (error) {
        console.log(error)
    }
});

router.get('/', async (req, res) => {
    const courses = await Course.find()
    res.json({ data: courses })
})
router.get('/:eduOrg/getByName/:title', async (req, res) => {

    try {
        const eduOrg = req.params.eduOrg
        console.log(eduOrg)
        const title = req.params.title
        console.log(title)
        const courses = await Course.find()
        for (var i = 0; i < courses.length; i++) {

            if (courses[i].title === title && courses[i].eduOrganisation === eduOrg) {
                res.json({ data: courses[i] })
            }
        }
        res.json({ err: "no course with this info" })
    }

    catch (error) {
        res.json({ err: "something isn't right" })
    }

})

// / router.get('/:_id', passport.authenticate('jwt', { session: false }),async(req, res) =>{
    router.get('/:id', passport.authenticate('jwt', { session: false }),async(req, res) =>{
//still need to handle a unique EduOrg name to check how is accessing 
    try {
        const id = req.params.id

        const course = await Course.findById(id)
        //const Course = await Course.reviews

        if (!course) return res.json({ error: 'course does not exist' })
        // for()
        res.json({ data: course })
    }
    catch (error) {
        // We will be handling the error later
        //    console.log(error)
        res.json({ err: "Could not find a course with this id" })
    }


    // res.json({data: course})
})
// search for a course by name 


router.get('/:id/applicants', async (req, res) => {
    try {
        const id = req.params.id
        const course = await Course.findById(id)
        if (!course) return res.json({ err: 'course does not exist' })
        const applicants = course.applicants;
        var members = [];
        console.log(members.length)
        for (let i = 0; i < applicants.length; ++i) {
            const mem = await Member.findById(applicants[i])
            if (mem)
                members.push(mem)
        }
        console.log(id); console.log(applicants)
        res.json({ data: members })
    }
    catch (error) {
        res.json({ err: "Could not find a course with this id" })
    }


})

router.put('/:id', async (req, res) => {
    console.log(req.body)
    const isValidated = validator.updateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });
    else {
        console.log('b')
        await Course.findByIdAndUpdate(req.params.id, req.body)
            .exec()
            .then(r => { return res.redirect(303, `/api/courses/${req.params.id}`) })
            .catch(err => { console.log(err); return res.status(400).send(`Sorry, couldn't update a course with that id !`) })
    }
});


router.put('/:id/apply', async (req, res) => {
    console.log('hnaaSmsm')
    console.log(req.body.applicantId)
    console.log('hnaaSmsm')

    const isValidated = validator.applyValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });

    const applicantId = req.body.applicantId;
    const courseId = req.params.id;
    var course = await Course.findById(courseId);
    console.log('one')
    course.applicants.push(applicantId);
    console.log('two')

    Course.findByIdAndUpdate(courseId, { applicants: course.applicants })
        .exec()
        .then(doc => { return res.redirect(303, `/api/courses/${req.params.id}`) })
        .catch(err => { console.log(err); return res.send(`Sorry, couldn't update a course with that id !`) });

    console.log('one')

})
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deletedCourse = await Course.findByIdAndRemove(id)
        res.json({ msg: 'Course was deleted successfully', data: deletedCourse })
    }

    catch (error) {
        res.json({ err: "Could not find a course with this id" })
    }
})

router.get('/y/:title', async (req, res) => {
    try {
        const title = req.params.title
        const courses = await funcs.getCourse()
        console.log(title + 'hiii')
        const coursey = []
        for (var i = 0; i < courses.data.data.length; i++) {
            if (courses.data.data[i].title === title)
                coursey.push(courses.data.data[i])
            res.json({ data: coursey })
        }
    }
    catch (error) {
        console.log(error)
    }
    res.json({ data: coursey })

})

router.put('/:id/unApply', async (req, res) => {

    const isValidated = validator.applyValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });

    const applicantId = req.body.applicantId;
    const courseId = req.params.id;
    var course = await Course.findById(courseId);
    console.log('one')
    var app = course.applicants
    var index = app.indexOf(applicantId);
    if (index > -1) {
        app.splice(index, 1);
      }
    console.log('two')

    Course.findByIdAndUpdate(courseId, { applicants: app })
        .exec()
        .then(doc => { return res.redirect(303, `/api/courses/${req.params.id}`) })
        .catch(err => { console.log(err); return res.send(`Sorry, couldn't update a course with that id !`) });

    console.log('one')

})

module.exports = router
