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
    
    const workshop = new Workshop(
        title,
        eduOrg,
        duration,
        educator,
        price,
        description,
        location,
        applicants
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
    if(applicants !== undefined)
    workshop.applicants = applicants

    res.send(workshops)
})
router.get('/', (req, res) => {
    let data = "";
    workshops.forEach((value) => {
        const workshop_id = value.id;
        const workshop_name = value.title;
        data += `<a href="/api/workshops/${workshop_id}">${workshop_name}</a><br>`;
    });
    res.send(data);
});

router.get('/:id', (req, res) => {
    var data = "";
    workshops.forEach((value) => {
        if(value.id === req.params.id) {
            data = `Id: ${value.id}<br>Name: ${value.title}<br>eduOrganisation: ${value.eduOrganisation}<br>duration: ${value.duration}<br>educator: ${value.educator}<br>price: ${value.price}<br>decription: ${value.decription}<br>location: ${value.location}`;
            return;
        }
    });
    res.send(data || 'No student matches the requested id');
});



router.delete('/:id', (req, res) => {
    const workshopId = req.params.id 
    const workshop = workshops.find(workshop => workshop.id === workshopId)
    const index = workshops.indexOf(workshop)
    workshops.splice(index,1)
    res.send(workshops)
})

module.exports = router