const express = require('express')
const router = express.Router()

const Joi = require('joi');
router.use(express.json())
// We will be connecting using database 
const Course = require('../../models/Course')

// temporary data created as if it was pulled out of the database ...
var courses = [
    new Course('SE','GUC', 3, 'Aisha', 300, 'software engineering', 'Cairo'),
    new Course('DB','GUC', 4, 'Wael', 3000, 'Databases', 'Cairo')
];

router.post('/',  (req, res) => {

    const schema = {
        title : Joi.string().required(),
        eduOrg : Joi.string().required(),
        duration : Joi.number(),
        educator : Joi.string().required(),
        price : Joi.number().required(),
        description : Joi.string(),
        location : Joi.string()
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
    
    const course = new Course(
        title,
        eduOrg,
        duration,
       educator,
         price,
         description,
         location
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
        location : Joi.string()
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
    
    res.send(courses)
})

module.exports = router