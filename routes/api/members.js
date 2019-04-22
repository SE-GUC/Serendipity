const express = require('express')

const router = express.Router()

const validator = require('../../Validations/memberValidations')

router.use(express.json())

const Job = require('../../models/Job')

const Member = require('../../models/Member')

const Workshop = require('../../models/Workshop') //yara
const objectId = require('mongoose').objectid //yara
const passport = require('passport');//for auth trial


router.get('', async (req, res) => {

  const members = await Member.find()

  res.json({ data: members })

});

/*
Auth in Member :
get.id:
delete:
put:

*/




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
        //notification
        require('../../services/mailer').sendMail(newEducationalOrganization).then(data => {
          console.log(data)
         }).catch(err => console.log(err)) ;
        res.json({ msg: 'Member was created successfully', data: newMember })
      }
    }
  }

  catch (error) {

    // We will be handling the error later

    console.log(error)
  }

});
//  router.get('/:_id', passport.authenticate('jwt', { session: false }),async(req, res) =>{
  router.get('/:_id', passport.authenticate('jwt', { session: false }),async(req, res) =>{
  
  const id = req.params._id;
  // admin can view Members 
  const admin =await Admin.findById(req.user.id )
  console.log(id)
  console.log(admin._id)
  console.log(req.user.id)
  const id2=admin.id
  const id3=req.user.id

  if(id3==id2 || id3==id) {
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
      return "Member Not Found"


    });
  }
  else {
    res.status(401).json({ err: "Not authorized "});
  }

});

router.put('/:_id', passport.authenticate('jwt', { session: false }),async(req, res) =>{
  try {
//is admin allowed here ?
    const id = req.params._id; //id of the member being updated
    const id3=req.user.id //id of whats in bearer (whose logged in right now)
   if(id==id3){
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

      }
    }
  }else {
    res.status(401).json({ err: "Not authorized "});
  }
}
  catch (err) {
    res.send(err)
  }


});



router.delete('/:_id', passport.authenticate('jwt', { session: false }),async(req, res) =>{
//is admin allowed here ?
  try {

     const deletedMember = await Member.findOneAndDelete ({ _id : req.params._id})
     res.json({msg :'Member deleted successfully' , data : deletedMember})


  }

  catch (error) {

    console.log(error)

  }
})


//MAYAR
router.put('/:id/addcourse', async(req,res) => {
  // console.log('hnaaSmsm')
  // console.log(req.body.coursesId)
  // console.log('hnaaSmsm')

  const isValidated = validator.applyValidation(req.body)
  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });

  const coursesId = req.body.coursesId;
  const memberId = req.params.id;
  var member = await Member.findById(memberId);
  // console.log('one')
  // console.log(coursesId)

  member.coursesTaken.push(coursesId);
 // console.log('two')

  Member.findByIdAndUpdate(memberId,{coursesTaken:member.coursesTaken})
  .exec()
  .then(doc => { return res.redirect(303, `/api/members/${req.params.id}`) })
  .catch(err => { console.log(err); return res.send(`Sorry, couldn't update a member with that id !`) });

  console.log('one')

})

module.exports = router
