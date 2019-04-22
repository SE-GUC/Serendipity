const express = require('express')

const router = express.Router()

const validator = require('../../Validations/memberValidations')

router.use(express.json())

const Job = require('../../models/Job')

const Member = require('../../models/Member')
const Admin = require ('../../models/Admin')
const Workshop = require('../../models/Workshop') //yara
const Assessment = require('../../models/Assessment') 

const objectId = require('mongoose').objectid //yara
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey
const bcrypt = require('bcryptjs');
const passport = require('passport');//for auth trial

router.get('', async (req, res) => {
  console.log("in get all")
  const members = await Member.find()
  res.json({ data: members })

});

router.get('/getexperts' , async (req , res) => {

  const members = await Member.find({expert : true})
  res.json(members);

});

router.get('./routes/api/assessments/:name' , passport.authenticate('jwt', { session: false }) ,  async (req , res) => {
  const id = req.params._id;
  const id2=admin.id
  const id3=req.user.id
  if(id3==id2 || id3==id) {  
const assessments = await Assessment.find({expertName : name})
res.json(assessments);
} 
});

function Age(birthday) { // birthday is a date

  var d = new Date();

  var t = new Date(birthday)

  return d.getFullYear() - t.getFullYear();

}
function helper(_id) {
  return _id
}


async function calculateMatching(_id) {
  try {
    commen = [];

    Member.findById(_id)

      .exec()

      .then(r => {

        memberskills = r.skills
      });
    const jobs = await Job.find();
    jobs

      .exec()

      .then(r2 => {

        r2.forEach((value) => {

          const skills = value.skills;

          if (commen(skills, memberskills) >= 1)

            commen.push(value)

        });

      })

  }
  catch (error) {
    return error
  }

  return commen;

};


async function filterbylocation(_id) {
  try {
    filtered = [];

    Member.findById(_id)

      .exec()

      .then(r => {

        memberlocation = r.location

      });
    const jobs = await calculateMatching(_id).find();
    jobs

      .exec()

      .then(r2 => {
        r2.forEach((value) => {
          const joblocation = value.location;
          if (memberlocation == joblocation)
            filtered.push(value)
        })
      })
  }
  catch (error) {
    return error
  }

  return filtered;

};

async function finalfilterbyavailability(_id) {
  try {

    recommendations = [];

    Member.findById(_id)

      .exec()

      .then(r => {

        memberlocation = r.location

      });
    const jobs = filterbylocation(_id).find();
    jobs

      .exec()

      .then(r2 => {

        r2.forEach((value) => {

          if (value.state == "posted")

            recommendations.push(value)

        })
      })
  }
  catch (error) {
    return error
  }

  return recommendations;
}



function commen(array1, array2) {

  c = 0;

  for (i = 0; i < array2.length; i++) {

    for (j = 0; j < array1.length; j++) {

      if (array2[i] == array1[j])

        c++;

    }

  }

  return c;

}


// create a new member and add it to the database

router.post('/', async (req, res) => {

  try {
   
    const isValidated = validator.createValidation(req.body)

    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const username = req.body.userName;
    const found = await Member.findOne({ "userName": username });
    if (found)
      return res.status(400).send({ error: "username is already in use" });
    else {
      const email = req.body.email;
      const found = await Member.findOne({ "email": email });
      if (found)
        return res.status(400).send({ error: "email is already in use" });
      else {
        const newMember = await Member.create(req.body)

        newMember.Age = Age(req.body.birthDate)

        res.json({ msg: 'Member was created successfully', data: newMember })
      }
    }
  }
  catch (error) {

    // We will be handling the error later

    console.log(error)
  }

});
router.get("/:id", passport.authenticate('jwt', { session: false })  , async (req, res) => {
  const id = req.params.id;
  console.log("in getid")
  console.log(req.params.id)
  console.log(req.user._id)
  const admin = await Admin.findById(req.user._id )
  let id2 = '';
  if (admin)
  id2 = admin._id
  const id3=req.user._id
  if(id3 == id2 || id3 == id) {   
    Member.findById(id)
    .exec()
    .then(r => {
      if (r) {
        const ret = {};
        ret.data = r;
        ret.recommendations = finalfilterbyavailability(id);
        res.status(200).json(ret);
        res.status(200).json(r);
      } else {
        res
          .status(404)
          .json({ message: "Member Not Found" });

      }
    })
    .catch(err => {
      res.json("Member Not found")
    });
  }
  else {
    res.json("Not authorized");
  }
});

router.put('/:_id',passport.authenticate('jwt', { session: false }), async (req, res) => {
  const id = req.params._id;
  console.log("in put")
  const admin = await Admin.findById(req.user._id )
  let id2 = '';
  if (admin)
  id2 = admin._id
  const id3=req.user._id 
  console.log("put request")
  console.log(req.user._id) ;
  console.log(id2);
  console.log(req.params._id);
  if(id3 == id2 || id3 == id) {
  try {
       const isValidated = validator.updateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })

    const username = req.body.userName;
    const found = await Member.findOne({ "userName": username });
    if (found)
      return res.status(400).send({ error: "username is already in use" });
    else {
      const email = req.body.email;
      const found = await Member.findOne({ "email": email });
      if (found)
        return res.status(400).send({ error: "email is already in use" });
      else {
        const updated = await Member.findByIdAndUpdate(req.params._id, req.body)
        return res.send(updated)
      }}
    }
  catch (err) {
    res.send(err)
  }
}
else {
  res.json("Not authenticated")
}
});



router.delete('/:_id' , passport.authenticate('jwt', { session: false }), async (req, res) => {
  const id = req.params._id;
  console.log("in Delete")
  const admin = await Admin.findById(req.user._id )
  let id2 = '';
  if (admin)
  id2 = admin._id
  const id3=req.user._id 
  console.log(req.user._id) ;
  console.log(id2);
  console.log(req.params._id);
  if(id3 == id2 || id3 == id) {
  try { 
     const deletedMember = await Member.findOneAndDelete ({ _id : req.params._id})
     res.json({msg :'Member deleted successfully' , data : deletedMember})

    }
  catch (error) {

    console.log(error)
  }}
});

//MAYAR
router.put('/:id/addcourse', async(req,res) => {
  const id = req.params._id;
  console.log("in Delete")
  const admin = await Admin.findById(req.user._id )
  let id2 = '';
  if (admin)
  id2 = admin._id
  const id3=req.user._id 
  console.log(req.user._id) ;
  console.log(id2);
  console.log(req.params._id);
  if(id3 == id2 || id3 == id) {
  const isValidated = validator.applyValidation(req.body)
  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });

  const coursesId = req.body.coursesId;
  const memberId = req.params.id;
  var member = await Member.findById(memberId);
  member.coursesTaken.push(coursesId);
  Member.findByIdAndUpdate(memberId,{coursesTaken:member.coursesTaken})
  .exec()
  .then(doc => { return res.redirect(303, `/api/members/${req.params.id}`) })
  .catch(err => { console.log(err); return res.send(`Sorry, couldn't update a member with that id !`) });
  console.log('one')
  }
  else {
    res.json("Not Authenticated")
  }
});
router.put('/:id/addskills', async(req,res) => {
  const id = req.params._id;
  const admin = await Admin.findById(req.user._id )
  let id2 = '';
  if (admin)
  id2 = admin._id
  const id3=req.user._id 
  console.log(req.user._id) ;
  console.log(id2);
  console.log(req.params._id);
  if(id3 == id2 || id3 == id) {
  const isValidated = validator.applyValidation(req.body)
  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });

  const skill = req.body.skill;
  const memberId = req.params.id;
  var member = await Member.findById(memberId);
  member.skills.push(skill);
  Member.findByIdAndUpdate(memberId,{skills:member.skills})
  .exec()
  .then(doc => { return res.redirect(303, `/api/members/${req.params.id}`) })
  .catch(err => { console.log(err); return res.send(`Sorry, couldn't update a member with that id !`) });
  }
  else {
    res.json("Not Authenticated")
  }
});
router.put('/:id/addinterests', async(req,res) => {
  const id = req.params._id;
  const admin = await Admin.findById(req.user._id )
  let id2 = '';
  if (admin)
  id2 = admin._id
  const id3=req.user._id 
  console.log(req.user._id) ;
  console.log(id2);
  console.log(req.params._id);
  if(id3 == id2 || id3 == id) {
  const isValidated = validator.applyValidation(req.body)
  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });

  const interest = req.body.interest;
  const memberId = req.params.id;
  var member = await Member.findById(memberId);
  member.interests.push(interest);
  Member.findByIdAndUpdate(memberId,{interests:member.interests})
  .exec()
  .then(doc => { return res.redirect(303, `/api/members/${req.params.id}`) })
  .catch(err => { console.log(err); return res.send(`Sorry, couldn't update a member with that id !`) });
  }
  else{
    res.json("Not authenticated");
  }
});

module.exports = router;