const express = require('express')
const Joi = require('joi');
const mongoose = require('mongoose')
const router = express.Router()
router.use(express.json())



const validator = require('../../validations/CourseValidations')
const Course = require('../../models/Course')
//const Member
router.post('/',  async (req, res) => {
    try{
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });
    else{
    await new Course({
        _id: mongoose.Types.ObjectId(),
        title : req.body.title,
        eduOrganisation : req.body.eduOrganisation,
        duration : req.body.duration,
        educator : req.body.educator,
        price : req.body.price,
        description : req.body.description,
        location : req.body.location,
        applicants : req.body.applicants
      }).save()
        .then( res.redirect('/api/courses'))
        .catch(err => { console.log(err); return res.send(`Sorry, could not create a new course with this data !`) })
    
    }
    }
    catch(error) { 
        console.log(error)
    } 
});

router.get('/', async (req,res) => {
    const courses = await Course.find()
    res.json({data: courses})
})
    
router.get('/:id', async (req,res) => {
    
    try {
        const id = req.params.id

        const course = await Course.findById(id)

        //const Course = await Course.reviews

        if(!course) return res.status(404).send({error: 'course does not exist'})
        // for()
        res.json({data: course})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    

   // res.json({data: course})
})

router.put('/:id', async(req, res) => {
   
    const isValidated = validator.updateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });
    else{
    await Course.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then(r => {return res.redirect(303, `/api/courses/${req.params.id}`) })
    .catch(err => {console.log(err); return res.status(400).send(`Sorry, couldn't update a course with that id !`) })
    }
});

router.put('/:id', async(req, res) => {
   
    const isValidated = validator.updateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });
    else{
    await Course.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then(r => {return res.redirect(303, `/api/courses/${req.params.id}`) })
    .catch(err => {console.log(err); return res.send(`Sorry, couldn't update a course with that id !`) })
    }
});

router.put('/:id/apply', async(req,res) => {

    const isValidated = validator.applyValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });

    const applicantId = req.body.applicantId;
    const courseId = req.params.id;
    var course = await Course.findById(courseId);
    console.log('one')
    course.applicants.push(applicantId);
    console.log('two')

    Course.findByIdAndUpdate(courseId,{applicants:course.applicants})
    .exec()
    .then(doc => { return res.redirect(303, `/api/courses/${req.params.id}`) })
    .catch(err => { console.log(err); return res.send(`Sorry, couldn't update a course with that id !`) });

    console.log('one')

})

router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedCourse = await Course.findByIdAndRemove(id)
     res.json({msg:'Course was deleted successfully', data: deletedCourse})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router