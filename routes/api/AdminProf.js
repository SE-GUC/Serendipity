const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

router.use(express.json())
// We will be connecting using database 
const Admin = require('../../models/Admin')

// temporary data created as if it was pulled out of the database ...
var admins = [
    new Admin('Mohamed Ahmed','ahmed_96','ahmed@gmail.com','disdkol'),
    new Admin('Lama Ihab','lama19','lama@gmail.com','dddidkj'),
    new Admin('Tae','tae95','tae@gmail.com','dddidkj')
];



// list of admins
router.get('/', (req, res) => {
    res.send({data:admins})
})


//view profile of certain id
router.get('/:id', (req, res) => {
    const adminid = req.params.id
    const admin = admins.find(admin => admin.id === adminid)
    res.send(admin)
})


// create a new admin
router.post('/joi',  (req, res) => {
   
    const full_name  = req.body.full_name;
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
   
    const schema = {
		full_name: Joi.string().required(),
        email: Joi.string().required(),
        password:Joi.string().min(6).required(),
        username:Joi.string().required()
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

    
    
    const admin = new Admin(
        
        full_name,
        username,
        email,
       password
        
    )
    admins.push(admin)
   res.send(admins)
});


// update an admin profile with an id
router.put('/:id', (req, res) => {
    const full_name = req.body.full_name;
    const email = req.body.email;
    const password = req.body.password;
    const id = req.params.id;
    const username = req.body.username;

    const admin = admins.find(admin => admin.id === id)
   if(full_name){
    if (typeof full_name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
    admin.full_name = full_name;}
    if(email){
        if (typeof email !== 'string') return res.status(400).send({ err: 'Invalid value for email' });
    admin.email= email;}
    if(password){
        if (password.length<6 || typeof password !== 'string') return res.status(400).send({ err: 'password has to be string of min 6' });
 
    admin.password = password;}

    if(username){
        if (typeof username !== 'string') return res.status(400).send({ err: 'Invalid value for username' });
   
    admin.username = username;}

   
  
    
    res.send(admins)
})

// delete an admin

router.delete('/:id', (req, res) => {
    const adminid = req.params.id 
    const admin = admins.find(admin => admin.id === adminid)
    const index = admins.indexOf(admin)
    admins.splice(index,1)
    res.send(admins)
})

module.exports = router