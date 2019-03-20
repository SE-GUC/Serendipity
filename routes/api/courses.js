const express = require('express')
const router = express.Router()

const Joi = require('joi');
router.use(express.json())
// We will be connecting using database 
const Course = require('../../models/Course')

// temporary data created as if it was pulled out of the database ...
var courses = [
    new Course('SE','GUC', 3, 'Aisha', 300, 'software engineering', 'Cairo',[1,2]),
    new Course('DB','GUC', 4, 'Wael', 3000, 'Databases', 'Cairo',[3,7])
];

router.post('/',  (req, res) => {

    const schema = {
        title : Joi.string().required(),
        eduOrg : Joi.string().required(),
        duration : Joi.number(),
        educator : Joi.string().required(),
        price : Joi.number().required(),
        description : Joi.string(),
        location : Joi.string(),
        applicants : Joi.array().items(Joi.string(),Joi.number())
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });

    const title = req.body.title
    const eduOrg = req.body.eduOrg
    const duration = req.body.duration
    const educator = req.body.educator
    const price = req.body.price
    const description = req.body.description
    const location = req.body.location
    const applicants = req.body.applicants

    const course = new Course(
        title,
        eduOrg,
        duration,
        educator,
        price,
        description,
        location,
        applicants
    )
    courses.push(course)
   res.send(courses)
});

router.put('/:id', (req, res) => {

    const schema = {
        title : Joi.string(),
        eduOrg : Joi.string(),
        duration : Joi.number(),
        educator : Joi.string(),
        price : Joi.number(),
        description : Joi.string(),
        location : Joi.string(),
        applicants : Joi.array().items(Joi.string(),Joi.number())
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });

    const title = req.body.title
    const eduOrg = req.body.eduOrg
    const duration = req.body.duration
    const educator = req.body.educator
    const price = req.body.price
    const description = req.body.description
    const location = req.body.location
    const applicants = req.body.applicants
    const id = req.params.id;


    const course = courses.find(course => course.id === id)
    
    if(title !== undefined)
    course.title = title
    if(eduOrg !== undefined)
    course.eduOrg = eduOrg
    if(duration !== undefined)
    course.duration = duration
    if(educator !== undefined)
    course.educator = educator
    if(price !== undefined)
    course.price = price
    if(description !== undefined)
    course.description = description
    if(location !== undefined)
    course.location = location
    if(applicants !== undefined)
    course.applicants = applicants
    
    res.send(courses)

});


router.get('/', (req, res) => {
    let data = "";
    courses.forEach((value) => {
        const courses_id = value.id;
        const courses_name = value.title;
        data += `<a href="/api/courses/${courses_id}">${courses_name}</a><br>`;
    });
    res.send(data);
});

router.get('/:id', (req, res) => {
    var data = "";
    courses.forEach((value) => {
        if(value.id === req.params.id) {
            data = `Id: ${value.id}<br>Name: ${value.title}<br>eduOrganisation: ${value.eduOrganisation}<br>duration: ${value.duration}<br>educator: ${value.educator}<br>price: ${value.price}<br>decription: ${value.decription}<br>location: ${value.location}`;
            return;
        }
    });
    res.send(data || 'No student matches the requested id');
});

router.delete('/:id', (req, res) => {
    const courseId = req.params.id 
    const course = courses.find(course => course.id === courseId)
    const index = courses.indexOf(course)
    courses.splice(index,1)
    res.send(courses)
})

module.exports = router