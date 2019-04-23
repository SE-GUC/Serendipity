const express = require('express')
const Joi = require('joi');
const router = express.Router()
const mongoose = require('mongoose')
router.use(express.json())
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey
const Admin = require('../../models/Admin');//yara
const EducationalOrganization= require('../../models/EducationalOrganization');
const Partner = require('../../models/Partner');
const Member = require('../../models/Member');
//works !!
router.post('/', async (req, res) => {
	try {
        console.log("in login here")
        const { email, password } = req.body;
        console.log(email)
        console.log(password)
        const eduOrg = await EducationalOrganization.findOne({ email });
        const member= await Member.findOne({ email });
        const partner= await Partner.findOne({ email });
        const admin = await Admin.findOne({email});
        if(!eduOrg && !member && !partner && !admin) return res.status(404).json({ email: 'Email does not exist' });
        console.log("here no errors yet in login")
        //if (!eduOrg) return res.status(404).json({ email: 'Email does not exist' });
        //const match = bcrypt.compareSync(password, eduOrg.password);
        //Admin
        if(admin) 
        {   console.log("admin")
            const matchA = bcrypt.compareSync(password, admin.password);
            const matchAA = (password===admin.password) //since password is not hashed yet
            if (matchA || matchAA) {
                const payload = {
                    id: admin.id,
                    name: admin.name,
                    email: admin.email
                }
                const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
                return res.json({token: `Bearer ${token}`})
            }
            else return res.status(400).send({ password: 'Wrong password' });
        } 
        //EduOrg
        if(eduOrg) 
        {   console.log("eduorg")
            const matchE = bcrypt.compareSync(password, eduOrg.password);
           // const matchEE = (password===eduOrg.password) dont need it as password is hashed
            if (matchE ) {
                const payload = {
                    id: eduOrg.id,
                    name: eduOrg.name,
                    email: eduOrg.email
                }
                const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
                return res.json({token: `Bearer ${token}`})
            }
            else return res.status(400).send({ password: 'Wrong password' });
        } 
        //Member
        if(member) {
            console.log("member")
            const matchM = bcrypt.compareSync(password, member.password);
            const matchMM = (password===member.password)
            console.log(matchMM)
            if (matchM || matchMM) {
                const payload = {
                    id: member._id,
                    name: member.name,
                    email: member.email
                }
                const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
                return res.json({token: `Bearer ${token}`})
            }
            else return res.status(400).send({ password: 'Wrong password' });
        }
        //Partner
        if(partner){
            console.log("partner")
            const matchP = bcrypt.compareSync(password, partner.password);
            const matchPP = (password===partner.password)
            console.log(matchPP)
            if (matchP|| matchPP) {
                const payload = {
                    id: partner.id,
                    name: partner.name,
                    email: partner.email
                }
                const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
                return res.json({token: `Bearer ${token}`})
            }
            else return res.status(400).send({ password: 'Wrong password' });
        }


    
        
	} catch (e) {}
});
module.exports = router