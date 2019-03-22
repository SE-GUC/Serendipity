const express = require('express');
//const Joi = require('joi');
//const uuid = require('uuid');
const router = express.Router();
const mongoose = require('mongoose')

router.use(express.json())
// We will be connecting using database 
const Admin = require('../../models/Admin')
const validator = require('../../Validations/AdminValidations')

// temporary data created as if it was pulled out of the database ...
// var admins = [
//     new Admin('Mohamed Ahmed','ahmed_96','ahmed@gmail.com','disdkol'),
//     new Admin('Lama Ihab','lama19','lama@gmail.com','dddidkj'),
//     new Admin('Tae','tae95','tae@gmail.com','dddidkj')
// ];




//////////////////////

router.get('/', async (req,res) => {
    const admins = await Admin.find()
    res.json({data: admins})
})



router.get('/:id', async (req,res) => {
    
    try {
        const id = req.params.id

        const admin = await Admin.findById(id)
       

        if(!admin) return res.status(404).send({error: 'Admin does not exist'})
        
        res.json({data: admin})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    

    res.json({data: admin})
})


router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newAdmin = await Admin.create(req.body)
     res.json({msg:'Admin was created successfully', data: newAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })



 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const admin = await Admin.findOne({id})
     if(!admin) return res.status(404).send({error: 'Admin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAdmin = await Admin.updateOne(req.body)
     res.json({msg: 'Admin updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedAdmin = await Admin.findByIdAndRemove(id)
     res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })





// router.get('/', (req, res) => {
//     let data = "";
//     admins.forEach((value) => {
//         const admin_id = value.id;
//         const admin_name = value.username;
//         data += `<a href="/api/admins/${admin_id}">${admin_name}</a><br>`;
//     });
//     res.send(data);
//  });
 
//  router.get('/:id', (req, res) => {
//     var data = "";
//     admins.forEach((value) => {
//         if(value.id === req.params.id) {
//             data = `Id: ${value.id}<br>username: ${value.username}<br>email: ${value.email}<br>password: ${value.password}<br>fullname: ${value.full_name}`;
//             return;
//         }
//     });
//     res.send(data || 'No admin matches the requested id');
//  });
 
 
 
//  // Get a certain job
//  router.get('/:id', (req, res) => {
 
//     const adminId = req.params.id 
//     const found = admins.some(admin => admin.id === adminId)
//     if(found){
//     res.json({
//     admins:admins.filter(admin =>admin.id!==adminId)
//  })
 
//     }
//     else{
 
//        res.status(404).json({err: 'We can not find the admin you are looking for you are looking for sorry'});
//     }
//  });
 











/////////////////////////



// list of admins
// router.get('/', (req, res) => {
//     res.send({data:admins})
// })


// //view profile of certain id
// router.get('/:id', (req, res) => {
//     const adminid = req.params.id
//     const admin = admins.find(admin => admin.id === adminid)
//     res.send(admin)
// })


// create a new admin
// router.post('/',  (req, res) => {
   
//     const full_name  = req.body.full_name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const username = req.body.username;
   
//     const schema = {
// 		full_name: Joi.string().required(),
//         email: Joi.string().required(),
//         password:Joi.string().min(6).required(),
//         username:Joi.string().required()
// 	}

// 	const result = Joi.validate(req.body, schema);

// 	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

    
    
//     const admin = new Admin(
        
//         full_name,
//         username,
//         email,
//        password
        
//     )
//     admins.push(admin)
//    res.send(admins)
// });


// // update an admin profile with an id
// router.put('/:id', (req, res) => {
//     const full_name = req.body.full_name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const id = req.params.id;
//     const username = req.body.username;

//     const admin = admins.find(admin => admin.id === id)
//    if(full_name){
//     if (typeof full_name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
//     admin.full_name = full_name;}
//     if(email){
//         if (typeof email !== 'string') return res.status(400).send({ err: 'Invalid value for email' });
//     admin.email= email;}
//     if(password){
//         if (password.length<6 || typeof password !== 'string') return res.status(400).send({ err: 'password has to be string of min 6' });
 
//     admin.password = password;}

//     if(username){
//         if (typeof username !== 'string') return res.status(400).send({ err: 'Invalid value for username' });
   
//     admin.username = username;}

   
  
    
//     res.send(admins)
// })

// // delete an admin

// router.delete('/:id', (req, res) => {
//     const adminid = req.params.id 
//     const admin = admins.find(admin => admin.id === adminid)
//     const index = admins.indexOf(admin)
//     admins.splice(index,1)
//     res.send(admins)
// })

module.exports = router