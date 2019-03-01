// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');

const router = express.Router();
router.use(express.json())
// Models
const Masterclass = require('../../models/Masterclass');

// temporary data created as if it was pulled out of the database ...
const masterclasses = [
    new Masterclass('SE',30, '2 months', 2000, 'software engineering','GUC', [1,2,3],[1,2]),
    new Masterclass('CSEN',50, '5 months', 5000, 'Computer science','GUC', [1,2,3],[4,5])
	
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200


// Get all masterclasses
router.get('/', (req, res) => {
    let data = "";
    masterclasses.forEach((value) => {
        const masterclassid = value.id;
        const masterclasstitle = value.title;
        data += `<a href="/api/masterclasses/${masterclassid }">${masterclasstitle}</a><br>`;
    });
    res.send(data);
});
// Get a certain MasterClass
router.get('/:id', (req, res) => {
    var data = "";
    masterclasses.forEach((value) => {
        if(value.id === req.params.id) {
            data = `Id: ${value.id}<br>Name: ${value.title}<br>eduOrganisation: ${value.Eduorganizationid}<br>duration: ${value.duration}<br>price: ${value.price}<br>description: ${value.description}<br>location: ${value.location}<br>workshops: ${value.workshopsIDs}<br>location: ${value.courseIDs}`;
            return;
        }
    });
    res.send(data || 'No masterclass matches the requested id');
});


// Create a masterclass
// router.post('/', (req, res) => {
    
//     const  title =req.body.title 
//     const duration =req.body.duration
//     const price =req.body.price
//     const description =req.body.description
//     const location =req.body.location
//     const course =req.body.listofcoursesids
//     const workshops=req.body.listofworkshopids
//     const eduid=req.body.Eduorganizationid
//     const id=uuid.v4()
    

//   const masterclass = new Masterclass(
//     id ,
//     title,
//     eduid,
//    duration,
//     price,
//    description ,
//     location ,
//    course,
//     workshops


//   )
      
   
//   masterclasses.push(masterclass)
//   res.send(masterclasses)
// })

router.post('/', (req, res) => {
	const  title =req.body.title 
    const duration =req.body.duration
    const price =req.body.price
    const description =req.body.description
    const location =req.body.location
    const listofcoursesids =req.body.listofcoursesids
    const listofworkshopids =req.body.listofworkshopids
    const eduid=req.body.Eduorganizationid
    const id=uuid.v4()

	const schema = {
        title:Joi.string().required(),
        duration:Joi.string().required(),
        price:Joi.number().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        
        eduid:Joi.number().required(),
        listofcoursesids :Joi.array().items(),  // array of coursesids which is another entity can't check on it
        listofworkshopids :Joi.array().items() //  array of workshopsids which is another entity can't check on it
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newMaster = {
        title,
        duration,
        price,
        description,
        location,
        eduid,
        listofcoursesids,
        listofworkshopids,

		id: uuid.v4(),
    };
    masterclasses.push(newMaster)
	return res.json({ data: newMaster });
});

// router.put('/:id', (req, res) => {
//     const MasterID=req.params.id
//     const updatedTitle = req.body.title 
//     const updatedlocation = req.body.location
//     const updatedduration = req.body.duration
//     const updateddescription = req.body.description
//     const updatedprice = req.body.price
//     const Master = masterclasses.find(masterclass => masterclass.id === parseInt(MasterID))
// 	if (typeof updatedTitle === 'string') Master.title=updatedTitle 
//     if (typeof updatedlocation === 'string') Master.location=updatedlocation
//     if (typeof updatedduration === 'string') Master.duration=updatedduration
//     if (typeof updateddescription === 'string') Master.description=updateddescription
//     if (typeof updatedprice === 'number') Master.price=updatedprice
    
	
// 	return res.json(Master);
// });


// Update a masterclass 
router.put('/:id', (req, res) => {
   const Id = req.params.id 
   const updatedTitle = req.body.title 
    const updatedlocation = req.body.location
    const updatedduration = req.body.duration
    const updateddescription = req.body.description
    const updatedprice = req.body.price
    const updatededuid=req.body.eduid
    const uplistofcoursesids =req.body.listofcoursesids
    const uplistofworkshopids =req.body.listofworkshopids

  
   
   
   
   const master =masterclasses.find(master=> master.id ===Id)
   if(updatedTitle){
      master.title = updatedTitle
   }
   if(updatedlocation){
      master.location=updatedlocation
   }
   if(updatedduration){
      master.duration=updatedduration

   }
   if(updateddescription){
      master.description=updateddescription
   }
   if(updatedprice){
      master.price=updatedprice
   }
   if(updatededuid){
    master.Eduorganizationid=updatededuid
   }
   if(uplistofcoursesids){
      master.courseIDs=uplistofcoursesids
   }
   if(uplistofworkshopids){
      master.workshopsIDs=uplistofworkshopids
   }
   
   const schema = {
    title:Joi.string().required(),
    duration:Joi.string().required(),
    price:Joi.number().required(),
    description:Joi.string().required(),
    location:Joi.string().required(),
    
    eduid:Joi.number().required(),
    listofcoursesids :Joi.array().items(),  // array of coursesids which is another entity can't check on it
    listofworkshopids :Joi.array().items() //  array of workshopsids which is another entity can't check on it
}
   const result = Joi.validate(req.body, schema);
   if (result.error) return res.status(400).send({ error: result.error.details[0].message });
   res.send(master)
})






// Delete a masterclass
router.delete('/:id', (req, res) => {
    const MasterId = req.params.id 
    const Master = masterclasses.find(masterclass => masterclass.id === MasterId)
    const index = masterclasses.indexOf(Master)
    masterclasses.splice(index,1)
    res.send(masterclasses)
})







module.exports = router;
