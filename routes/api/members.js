const express = require('express')
const router = express.Router()
const validator = require('../../validations/memberValidations')
router.use(express.json())
const Job =  require('../../models/Job')
const Member = require('../../models/Member')
const mongoose = require('mongoose')
router.get('', async(req, res) => {
    const members = await Member.find()
    res.json({data: members})
});


function Age(birthday) { // birthday is a date
    var d = new Date();
    var t = new Date (birthday)
    return d.getFullYear() - t.getFullYear() ;
}

function calculateMatching(_id){
  commen = [] ;
  Member.findById(_id)
  .exec()
  .then ( r => {
   memberskills = r.skills 
  }); 
Job.find()
.exec()
.then(r2 => {
  r2.forEach((value) => {
    const skills = value.skills;
    if (commen(skills, memberskills) >= 1 )
    commen.push(value)  
});
})
return commen;
};

function filterbylocation (_id){
filtered = [];
Member.findById(_id)
  .exec()
  .then ( r => {
   memberlocation = r.location 
});
calculateMatching(_id).find()
.exec()
.then( r2 => {
  r2.forEach((value) => {
    const joblocation = value.location;
    if (memberlocation == joblocation )
    filtered.push(value)
})
})
return filtered;
};

function finalfilterbyavailability (_id){
  recommendations = [];
  Member.findById(_id)
    .exec()
    .then ( r => {
     memberlocation = r.location 
  });
  filterbylocation(_id).find()
  .exec()
  .then( r2 => {
    r2.forEach((value) => {
      if (value.state == "posted" )
      recommendations.push(value)
  })
  })
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






// create a new member and add it to the database
router.post('/', async (req, res) => {
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        if ( req.body.userName){
          const found = Member.find(member => member.userName === req.body.userName);
          if ( found )
              return res.status(400).send({ error: "username is already in use" });
      }
        const newMember = await Member.create(req.body)
        newMember.Age = Age(req.body.birthDate)
        res.json({msg:'Member was created successfully', data: newMember})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)

       } 

});
router.get("/:_id", (req, res) => {

    const id = req.params._id;
    Member.findById(id)
      .exec()
      .then(r => {
        if (r) {
          res.status(200).json(r);
          res.json( { recommendations : finalfilterbyavailability } )
        } else {
          res
            .status(404)
            .json({ message: "Member Not Found" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });




router.put('/:_id', async (req,res) => {
    const isValidated = validator.updateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   else{
    if ( req.body.userName){
      const found = Member.find(member => member.userName === req.body.userName);
      if ( found )
          return res.status(400).send({ error: "username is already in use" });
  }
    Member.findByIdAndUpdate(req.params._id, req.body)
    .exec()
    .then(r => {return res.redirect(303, `/api/members/${req.params._id}`) })
    .catch(err => {console.log(err); return res.send("No Member found") })
   }
});

router.delete('/:_id', async (req,res) => {
    try {
     const deletedMember = await Member.findOneAndDelete (req.params._id)
     res.json('Member deleted successfully')
    }
    catch(error) {
        console.log(error)
    }
 })

module.exports = router
