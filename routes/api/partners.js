const express = require('express');
//const Joi = require('joi');
const Partner = require('../../models/Partner');
const router= express.Router();
const validator = require('../../validations/partnerValidations')

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

router.get('/', async (req,res) => {
    var data =`Partners: <br>` ;
    var partner = await Partner.find()
    data += partner 
    res.json(data)
 });


//GET SINGLE PARTNER
router.get('/:username', async(req,res)=> {
    var data =`Partners:` ;
    var partner = await Partner.find(req.params.username)
    if ( !partner) return res.status(404).send({error: 'Job does not exist'})
    data += partner 
    res.json(data)
});


//UPDATE A PARTNER
router.put('/:username', async (req,res)=> {
    try {
        const id = req.params.id
        const partner = await Partner.findOne({id})
        if(!partner) return res.status(404).send({error: 'Partner does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedPertner = await Partner.updateOne(req.body)
        res.json({msg: 'Partner updated successfully'})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
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