const express = require('express')
const router = express.Router()

router.use(express.json())

// We will be connecting using database 
const Workshop = require('../../models/Workshop')

// temporary data created as if it was pulled out of the database ...
const workshops = [
    new Workshop('1','Robotics','GUC', '3', 'Aisha', '300', 'software engineering', 'Cairo'),
    new Workshop('2','Cloud','GUC', '4', 'Wael', '3000', 'quite popular', 'Cairo')
];

router.post('/', (req, res) =>  {
    const title = req.body.title
    const eduOrg = req.body.eduOrg
    const duration = req.body.duration
    const educator = req.body.educator
    const price = req.body.price
    const description = req.body.description
    const location = req.body.location
    const id = workshops.length + 1+''
    
    const workshop = new Workshop(
        id,
        title,
        eduOrg,
        duration,
        educator,
        price,
        description,
        location
    )
    
    workshops.push(workshop)
    res.send(workshops)
})

router.put('/:id', (req, res) => {
    const title = req.body.title
    const eduOrg = req.body.eduOrg
    const duration = req.body.duration
    const educator = req.body.educator
    const price = req.body.price
    const description = req.body.description
    const location = req.body.location
    const id = req.params.id;

    const workshop = workshops.find(workshop => workshop.id === id)

    workshop.title = title
    workshop.eduOrg = eduOrg
    workshop.duration = duration
    workshop.educator = educator
    workshop.price = price;
    workshop.description = description
    workshop.location = location
    
    res.send(workshops)
})

module.exports = router