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

// router.get('/:id', (req, res) => {
//     const workshopId = req.params.id
//     const workshop = workshops.find(workshop => workshop.id === workshopId)
//     res.send(workshop)
// })


router.delete('/:id', (req, res) => {
    const workshopId = req.params.id 
    const workshop = workshops.find(workshop => workshop.id === workshopId)
    const index = workshops.indexOf(workshop)
    workshops.splice(index,1)
    res.send(workshops)
})
//router.get('/', (req, res) => res.json({ data: workshops }))

module.exports = router