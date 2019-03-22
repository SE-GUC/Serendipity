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
/*
router.get( '/:username' ,(req,res)=>{
   
    const userName = req.params.username ;
    const member = Member.find({userName});
    res.json(member)
});


// update info about a member
router.put('/:username', async(req, res) => {
    try {
        const username = req.params.id
        const member = await Member.findOne({id})
        if(!member) return res.status(404).send({error: 'Member does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedMember = await Member.updateOne(req.body)
        res.json({msg: 'Member updated successfully'})
       }
       catch(error) {
           // We will be handling the error later
           res.json("Something went wrong")
       } 
});

/*

router.delete('/:username' , (req,res)  =>{
    const memberUserName = req.params.username ;

    const member = members.find(member => member.userName == memberUserName);
    const index = members.indexOf(member);
    members.splice(index,1)
    let data = "" ;
members.forEach((member)=>{
data += `<br> username : ${member.userName}<br> 
email : ${member.email}<br>
name : ${member.name} <br>
password : ${member.password}<br>
available Daily hours : ${member.availableDailyHours}<br>
location : ${member.location}<br>
Birth Date : ${member.birthDate} <br>
Age : ${member.age}<br>
interests : ${member.interests} <br>
attended Events : ${member.attendedEvents}<br>
Previous Jobs : ${member.previousJobs}<br>
Previous Tasks : ${member.previousTasks} <br>
Reviews  : ${member.reviews}<br>
Reviwers : ${member.reviewers}<br>
Certificates : ${member.certificates} <br>
Courses Taken : ${member.coursesTaken} <br>
Contract Signed : ${member.contractSigned}<br>
Expiration Date : ${member.expirationDate}<br>
______________________________________________<br>
`;
}); 
res.send(data); 
}
 
 );
*/
module.exports = router




