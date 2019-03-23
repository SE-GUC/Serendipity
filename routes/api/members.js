const express = require('express')
const router = express.Router()
const validator = require('../../validations/memberValidations')
router.use(express.json())

const Member = require('../../models/Member')

router.get('', async(req, res) => {
    const members = await Member.find()
    res.json({data: members})
});


function Age(birthday) { // birthday is a date
    var d = new Date();
    var t = new Date (birthday)
    return d.getFullYear() - t.getFullYear() ;
}

// create a new member and add it to the database
router.post('/', async (req, res) => {
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newMember = await Member.create(req.body)
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
/*
  router.get("/:userName", (req, res) => {

    const username = req.params.userName;
    Member.find(username)
      .exec()
      .then(r => {
        if (r) {
          res.status(200).json(r);
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
*/

router.put('/:_id', async (req,res) => {
    const isValidated = validator.updateValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   else{
    Member.findOneAndUpdate(req.params._id, req.body)
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




