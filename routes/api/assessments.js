const express = require('express')
const router = express.Router()

router.use(express.json())
// We will be connecting using database 
const Course = require('../../models/Assessments')

// temporary data created as if it was pulled out of the database ...
var courses = [
    new Assessments('1','Peter','Slim Abdelnadher','CS1', 'GUC', '+2012345', 'Monday,Tuesday'),
    new Assessments('2','Liam','Aysha El-Safty','SE', 'GUC', '+2657764334', 'Saturday,Tuesday'),
    new Assessments('3','Talla','Alaa Abdelateef','Physics 1', 'GUC', '+45657834', 'Sunday'),
    new Assessments('4','Eleanor','Hany El-Sharkawy','Math 1', 'GUC', '+09876543', 'Monday,Wednesday'),
    new Assessments('5','Elizabeth','Yasser Hegazy','Circuits 2', 'GUC', '+87654324', 'Sunday, Tuesday'),
];
//get all assessments
router.get('', (req, res) => {
    res.send({data:Assessments})
})
//create a new assessment
router.post('/',  (req, res) => {

    const name = req.body.name;
    const expert_name = req.body.expert_name;
    const master_class = req.body.master_class;
    const phone_number = req.body.phone_number;


    if(!name) return res.status(400).send({err: 'This field is required'});
    if(!expert_name) return res.status(400).send({err: 'This field is required'});
    if(!master_class) return res.status(400).send({err: 'This field is required'});
    if(!phone_number) return res.status(400).send({err: 'This field is required'});
    if (typeof name !== 'string') return res.status(400).send({err: 'Please the name using literals'});


    
    const newAssessment = {
        name,
        expert_name,
        master_class,
        phone_number,
    };
    return res.json ({data : newAssessment});
});

router.post('/joi', (req, res) => {
    const name = req.body.name;
    const expert_name = req.body.expert_name;
    const master_class = req.body.master_class;
    const phone_number = req.body.phone_number;


    const assess = {
        name: Joi.string().min(3).required(),
        expert_name: Joi.string().min(3).required(),
        master_class: Joi.string().min(3).required(),
        phone_number: Joi.number().required(),
        
    }

    const result = Joi.validate (req.body, schema);

    if (result.error) 
    return res.status(400).send ({ error: result.error.details[0].message});

    
     const newAssessment = {
        name,
        expert_name,
        master_class,
        phone_number,
    };
    return res.json ({data : newAssessment});
});
module.exports = router;