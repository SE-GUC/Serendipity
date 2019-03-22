const express = require('express')
const Joi = require('joi');
const mongoose = require('mongoose')
const router = express.Router()
router.use(express.json())


const Workshop = require('../../models/Workshop')


router.post('/', (req, res) =>  {

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
    new Workshop({
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
        .then( res.redirect('/api/workshops'))
        .catch(err => { console.log(err); return res.send(`Sorry, could not create a new workshop with this data !`) })
    }
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
    Workshop.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then(r => {return res.redirect(303, `/api/workshops/${req.params.id}`) })
    .catch(err => {console.log(err); return res.send(`Sorry, couldn't update a workshop with that id !`) })
    }
})

// router.get('/', (req, res) => {
//     let data = "";
//     workshops.forEach((value) => {
//         const workshop_id = value.id;
//         const workshop_name = value.title;
//         data += `<a href="/api/workshops/${workshop_id}">${workshop_name}</a><br>`;
//     });
//     res.send(data);
// });

// router.get('/:id', (req, res) => {
//     var data = "";
//     workshops.forEach((value) => {
//         if(value.id === req.params.id) {
//             data = `Id: ${value.id}<br>Name: ${value.title}<br>eduOrganisation: ${value.eduOrganisation}<br>duration: ${value.duration}<br>educator: ${value.educator}<br>price: ${value.price}<br>decription: ${value.decription}<br>location: ${value.location}`;
//             return;
//         }
//     });
//     res.send(data || 'No student matches the requested id');
// });



router.delete('/:id', (req, res) => {
    const workshopId = req.params.id 
    const workshop = workshops.find(workshop => workshop.id === workshopId)
    const index = workshops.indexOf(workshop)
    workshops.splice(index,1)
    res.send(workshops)
})

module.exports = router