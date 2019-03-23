const express = require('express')
const Joi = require('joi');
const mongoose = require('mongoose')
const router = express.Router()
router.use(express.json())



const Course = require('../../models/Course')
//const Member
router.post('/',  (req, res) => {
    const schema = {
        title : Joi.string().required(),
        eduOrganisation : Joi.string().required(),
        duration : Joi.number(),
        educator : Joi.string().required(),
        price : Joi.number().required(),
        description : Joi.string(),
        location : Joi.string(),
        applicants : Joi.array().items(Joi.string(),Joi.number())
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    else{
    new Course({
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
});

router.get('/', async (req,res) => {
    const courses = await Course.find()
    res.json({data: courses})
})
    
router.get('/:id', async (req,res) => {
    
    try {
        const id = req.params.id

        const course = await Course.findById(id)
       // Workshop.getById(id)
        //const Course = await Course.reviews

        if(!course) return res.status(404).send({error: 'course does not exist'})
        // for()
        res.json({data: course})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    

    res.json({data: course})
})

router.put('/:id', (req, res) => {
    const schema = {
        title : Joi.string(),
        eduOrganisation : Joi.string(),
        duration : Joi.number(),
        educator : Joi.string(),
        price : Joi.number(),
        description : Joi.string(),
        location : Joi.string(),
        applicants : Joi.array().items(Joi.string(),Joi.number())
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    else{
    Course.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then(r => {return res.redirect(303, `/api/courses/${req.params.id}`) })
    .catch(err => {console.log(err); return res.send(`Sorry, couldn't update a course with that id !`) })
    }
});


// router.get('/', (req, res) => {
//     let data = "";
//     courses.forEach((value) => {
//         const courses_id = value.id;
//         const courses_name = value.title;
//         data += `<a href="/api/courses/${courses_id}">${courses_name}</a><br>`;
//     });
//     res.send(data);
// });

// router.get('/:id', (req, res) => {
//     var data = "";
//     courses.forEach((value) => {
//         if(value.id === req.params.id) {
//             data = `Id: ${value.id}<br>Name: ${value.title}<br>eduOrganisationanisation: ${value.eduOrganisationanisation}<br>duration: ${value.duration}<br>educator: ${value.educator}<br>price: ${value.price}<br>decription: ${value.decription}<br>location: ${value.location}`;
//             return;
//         }
//     });
//     res.send(data || 'No student matches the requested id');
// });

// router.delete('/:id', (req, res) => {
//     const courseId = req.params.id 
//     const course = courses.find(course => course.id === courseId)
//     const index = courses.indexOf(course)
//     courses.splice(index,1)
//     res.send(courses)
// })


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