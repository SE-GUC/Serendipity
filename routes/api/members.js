const express = require('express')

const router = express.Router()

//const validator = require('../../validations/memberValidations')

router.use(express.json())

const Job =  require('../../models/Job')

const Member = require('../../models/Member')
<<<<<<< HEAD
=======
const Workshop = require('../../models/Workshop') //yara
const objectId = require('mongoose').objectid //yara



>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
router.get('', async(req, res) => {

    const members = await Member.find()

    res.json({data: members})

});





function Age(birthday) { // birthday is a date

    var d = new Date();

    var t = new Date (birthday)

    return d.getFullYear() - t.getFullYear() ;

}
function helper(_id){
  return _id
}

<<<<<<< HEAD
async function calculateMatching(_id){
 try {
    commen = [] ;
=======


function calculateMatching(_id){

  commen = [] ;

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
  Member.findById(_id)

  .exec()

  .then ( r => {

   memberskills = r.skills 
<<<<<<< HEAD
  });
const jobs = await Job.find(); 
jobs
=======

  }); 

Job.find()

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
.exec()

.then(r2 => {

  r2.forEach((value) => {

    const skills = value.skills;

    if (commen(skills, memberskills) >= 1 )

    commen.push(value)  

});

})
<<<<<<< HEAD
}
catch(error){
return error 
}
=======

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
return commen;

};


<<<<<<< HEAD
async function filterbylocation (_id){
try {
  filtered = [];
=======

function filterbylocation (_id){

filtered = [];

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
Member.findById(_id)

  .exec()

  .then ( r => {

   memberlocation = r.location 

});
<<<<<<< HEAD
const jobs = await calculateMatching(_id).find() ;
jobs
=======

calculateMatching(_id).find()

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
.exec()

.then( r2 => {
<<<<<<< HEAD
r2.forEach((value) => {
  const joblocation = value.location;
  if (memberlocation == joblocation )
  filtered.push(value)
})
})}
catch (error){
  return error
}
=======

  r2.forEach((value) => {

    const joblocation = value.location;

    if (memberlocation == joblocation )

    filtered.push(value)

})

})

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
return filtered;

};

<<<<<<< HEAD
async function finalfilterbyavailability (_id){
  try {
=======


function finalfilterbyavailability (_id){

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
  recommendations = [];

  Member.findById(_id)

    .exec()

    .then ( r => {

     memberlocation = r.location 

  });
<<<<<<< HEAD
  const jobs = filterbylocation(_id).find();
  jobs
=======

  filterbylocation(_id).find()

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
  .exec()

  .then( r2 => {

    r2.forEach((value) => {

      if (value.state == "posted" )

      recommendations.push(value)

  })
<<<<<<< HEAD
  })}
  catch (error) {
    return error
  }
=======

  })

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
return recommendations;

}



function commen ( array1 , array2){

c = 0 ;

for ( i = 0 ; i < array2.length ; i++){

    for ( j = 0 ; j  <array1.length ; j++){

        if ( array2[i] == array1[j])

          c++;

     }

}

return c ;

}

<<<<<<< HEAD
=======












>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
// create a new member and add it to the database

router.post('/', async (req, res) => {

    try {

        const isValidated = validator.createValidation(req.body)

        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
<<<<<<< HEAD
          const username = req.body.userName;
          const found = await Member.findOne({"userName" : username});
          if ( found )
               return res.status(400).send({ error: "username is already in use" });
        else {
          const email = req.body.email;
          const found = await Member.findOne({"email" : email});
          if ( found )
               return res.status(400).send({ error: "email is already in use" });
        else {
=======

        /*if ( req.body.userName){

          const found = Member.find(member => member.userName === req.body.userName);

          console.log(found);

          if ( found )

          var r = "username is already in use";

              // return res.status(400).send({ error: "username is already in use" });

        }*/

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
        const newMember = await Member.create(req.body)

        newMember.Age = Age(req.body.birthDate)

        res.json({msg:'Member was created successfully', data: newMember})
<<<<<<< HEAD
    }}
  }
=======

       }

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
       catch(error) {

           // We will be handling the error later

           console.log(error)
<<<<<<< HEAD
       }
=======



       } 



>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
});

router.get("/:_id", (req, res) => {



    const id = req.params._id;

    Member.findById(id)

      .exec()

      .then(r => {

        if (r) {
<<<<<<< HEAD
          const ret = {};
          ret.data = r;
          ret.recommendations = finalfilterbyavailability(id);
          res.status(200).json(ret);
           res.status(200).json(r);
=======

          res.status(200).json(r);

          res.json( { recommendations : finalfilterbyavailability } )

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
        } else {

          res

            .status(404)

            .json({ message: "Member Not Found" });

        }

      })

      .catch(err => {
<<<<<<< HEAD
        return "Member Not Found"
     
=======

        console.log(err);

        res.status(500).json({ error: err });

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
      });

  });

<<<<<<< HEAD
router.put('/:_id', async (req,res) => {
  try{
=======








router.put('/:_id', async (req,res) => {

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
    const isValidated = validator.updateValidation(req.body)

    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
<<<<<<< HEAD
    const username = req.body.userName;
          const found = await Member.findOne({"userName" : username});
          if ( found )
               return res.status(400).send({ error: "username is already in use" });
        else {
          const email = req.body.email;
          const found = await Member.findOne({"email" : email});
          if ( found )
               return res.status(400).send({ error: "email is already in use" });
  
   else{
  const updated = await Member.findByIdAndUpdate(req.params._id, req.body)
    
    return res.send( updated) 
   
   }
  }
}
   catch(err){
     res.send(err)
   }
  
=======

   else{

    /*if ( req.body.userName){

      const found = Member.find(member => member.userName === req.body.userName);

      if ( found )

          return res.status(400).send({ error: "username is already in use" });

  }*/

    Member.findByIdAndUpdate(req.params._id, req.body)

    .exec()

    .then(r => {return res.redirect(303, `/api/members/${req.params._id}`) })

    .catch(err => {console.log(err); return res.send("No Member found") })

   }

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
});



router.delete('/:_id', async (req,res) => {

    try {

     const deletedMember = await Member.findOneAndDelete (req.params._id)
<<<<<<< HEAD
     res.json({msg :'Member deleted successfully' , data : deletedMember})
=======

     res.json('Member deleted successfully')

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
    }

    catch(error) {

        console.log(error)

    }
<<<<<<< HEAD
})

module.exports = router
=======

 })


 



module.exports = router

>>>>>>> e18ca44cff4477d8eb4ee14ecb54b70dd805f33a
