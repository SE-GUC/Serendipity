const express = require('express')
const router = express.Router()

const Joi = require('joi');

router.use(express.json())

// We will be connecting using database 
const Workshop = require('../../models/Workshop')

// temporary data created as if it was pulled out of the database ...
const workshops = [
    new Workshop('Robotics','GUC', 3, 'Aisha', 300, 'software engineering', 'Cairo'),
    new Workshop('Cloud','GUC', 4, 'Wael', 3000, 'quite popular', 'Cairo')
];

router.post('/', (req, res) =>  {

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
    
    const workshop = new Workshop(
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

    const workshop = workshops.find(workshop => workshop.id === id)

  
    if(title !== undefined)
    workshop.title = title
    if(eduOrg !== undefined)
    workshop.eduOrg = eduOrg
    if(duration !== undefined)
    workshop.duration = duration
    if(educator !== undefined)
    workshop.educator = educator
    if(price !== undefined)
    workshop.price = price
    if(description !== undefined)
    workshop.description = description
    if(location !== undefined)
    workshop.location = location
    
    res.send(workshops)
})

module.exports = router