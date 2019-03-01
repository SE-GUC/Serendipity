const express = require('express');
const Joi = require('joi');
const Partner = require('../../models/Partner');
const router= express.Router();
//const partners= require('./partners');

const partners = [
    new Partner('a@gmail', 'marina1','Marina','asdfgh')
];

//CREATE PARTNER
router.post('/', (req, res) => {
    //required fields when signing up
    const email = req.body.email
    const username = req.body.username
    const name = req.body.name
    const password = req.body.password
    
	const schema = {
        email: Joi.string().email().required(),
		name: Joi.string().required(),
		username: Joi.string().required(),
		password: Joi.string().required(),
    }

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newPartner = {
        email,
        username,
        name,
		password

    };
    partners.push(newPartner);
	return res.json({ data: newPartner });
});


//GET ALL PARTNERS
router.get('/', (req, res) => {
    let data = "";
    partners.forEach((value) => {
        const partner_username = value.username;
        const partner_name = value.name;
        data += `<a href="/api/partners/${partner_username}">${partner_name}</a><br>`;
    });
    res.send(data);
});


//GET SINGLE PARTNER
router.get('/:username', (req,res)=> {
    const found = partners.some(partner => partner.username  === req.params.username);

    if(found){
    res.json(partners.filter(partner =>partner.username === req.params.username));
    }
    else {
        res.status(400).json({msg: `No partner with the username of ${req.params.username}`})
    }
});


//UPDATE A PARTNER
router.put('/:username', (req,res)=> {
    const found = partners.some(partner => partner.username  === req.params.username);
    const schema = {
        email: Joi.string().email(),
        name: Joi.string(),
        username: Joi.string(),
        password: Joi.string(),
        description: Joi.string(),
        partners: Joi.array().items(),
        boardMembers: Joi.array().items(),
        fieldOfWork: Joi.string(),
        vacancies: Joi.array().items(Joi.string()),
        pastProjects: Joi.array().items(Joi.string()),
    }

    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });


    if(found){
        const upPartner = req.body;
        partners.forEach(partner => {

            if(partner.username === req.params.username){
              
                partner.email=upPartner.email ? upPartner.email : partner.email;
                partner.username=upPartner.username ? upPartner.username : partner.username;
                partner.name=upPartner.name ? upPartner.name : partner.name;
                partner.password=upPartner.password ? upPartner.password : partner.password;
                partner.description=upPartner.description ? upPartner.description : partner.description;
                partner.partners=upPartner.partners ? upPartner.partners : partner.partners;
                partner.boardMembers=upPartner.boardMembers ? upPartner.boardMembers : partner.boardMembers;
                partner.fieldOfWork=upPartner.fieldOfWork ? upPartner.fieldOfWork : partner.fieldOfWork;
                partner.vacancies=upPartner.vacancies ? upPartner.vacancies : partner.vacancies;
                partner.pastProjects=upPartner.pastProjects ? upPartner.pastProjects : partner.pastProjects;
            
                res.json({msg: 'Partner updated', partner})
               }
        });
    }
    else {
        res.status(400).json({msg: `No partner with the username of ${req.params.username}`})
    }

});

//DELETE A PARTNER
router.delete('/:username', (req,res)=> {

    const username = req.params.username 
    const partner = partners.find(partner => partner.username === username)
    const index = partners.indexOf(partner)
    partners.splice(index,1)
    res.send(partners)

    
});

module.exports = router;