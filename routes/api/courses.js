const express = require('express')
const router = express.Router()

router.use(express.json())
// We will be connecting using database 
const Course = require('../../models/Course')

// temporary data created as if it was pulled out of the database ...
var courses = [
    new Course('1','SE','GUC', '3', 'Aisha', '300', 'software engineering', 'Cairo'),
    new Course('2','DB','GUC', '4', 'Wael', '3000', 'Databases', 'Cairo')
];

router.get('', (req, res) => {
    res.send({data:courses})
})

router.post('/',  (req, res) => {

    const title = req.body.title
    const eduOrg = req.body.eduOrg
    const duration = req.body.duration
    const educator = req.body.educator
    const price = req.body.price
    const description = req.body.description
    const location = req.body.location
    const id = courses.length +1 +'';
    
    const course = new Course(
        id,
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
    const title = req.body.title
    const eduOrg = req.body.eduOrg
    const duration = req.body.duration
    const educator = req.body.educator
    const price = req.body.price
    const description = req.body.description
    const location = req.body.location
    const id = req.params.id;

    const course = courses.find(course => course.id === id)
    
    course.title = title
    course.eduOrg = eduOrg
    course.duration = duration
    course.educator = educator
    course.price = price;
    course.description = description
    course.location = location
    
    res.send(courses)
})

module.exports = router