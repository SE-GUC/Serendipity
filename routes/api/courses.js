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

router.get('/', (req, res) => res.json({ data: courses }))

module.exports = router