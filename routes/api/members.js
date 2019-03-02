const express = require('express')
const router = express.Router()
const Joi = require('joi')

router.use(express.json())
// We will be connecting using database 
const Member = require('../../models/Member')

var members = [
    // member = new Member( userName, availableDailyHours, location, name, email, password, birthDate ,interests , attendedEvents , previousJobs , previousTasks , previousProjects , reviews , reviewers , certificates , coursesTaken , contractSigned , expirationDate );

    new Member('hagerhilal' ,'8','el-rehab', 'Hager Hilal', 'hagerhilal2@gmail.com', 'Hh123654!', new Date(1998,02,10) ,['coding'],  [ ]  , [] , [] , [] , '4' , [] , [] , [('1','SE','GUC', '3', 'Aisha', '300', 'software engineering', 'Cairo')] , 'True' , '1/6/2020' , Age(new Date(1998,02,10))),
    new Member('hamadahilal' ,'12','el-rehab', 'Hamada Hilal', 'hamadahilal@gmail.com', 'HH999999$', new Date (2002,02,04) ,['mechamics' , 'football'],  []  , [] , [] , [] , '4' , [] , [] , [('2','DB','GUC', '4', 'Wael', '3000', 'Databases', 'Cairo')] , 'True' , '1/6/2022' , Age(new Date(2002,02,04)))

];


router.get('', (req, res) => {
    let data = "" ;
    members.forEach((member)=>{
    data += `username : ${member.userName}<br> 
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
    ______________________________________________
    `;
    })
    res.send(data);
});


function Age(birthday) { // birthday is a date
    var d = new Date();
    var t = new Date (birthday)
    return d.getFullYear() - t.getFullYear() ;
}

// create a new member and add it to the database
router.post('/',  (req, res) => {
    const userName = req.body.userName;
    const availableDailyHours = req.body.availableDailyHours ;
    const location = req.body.location ;
    const name = req.body.name ;
    const email = req.body.email;
    const password = req.body.password;
    const birthDate = req.body.birthDate || null ;
    const interests = req.body.interests || [] ;
    const attendedEvents = req.body.attendedEvents || [] ;  
    const previousJobs = req.body.previousJobs || [] ; 
    const previousTasks = req.body.previousTasks|| [];
    const previousProjects = req.body.previousProjects || [];
    const reviews = req.body.reviews  || null;
    const reviewers = req.body.reviewers || null;
    const certificates = req.body.certificates || null ;
    const coursesTaken = req.body.coursesTaken || [];
    const contractSigned = req.body.contractSigned || null;
    const expirationDate = req.body.expirationDate || null;
    const age = Age(birthDate);

const schema = {
userName : Joi.string().required () ,
email: Joi.string().email().required(),
name: Joi.string().required(),
password: Joi.string().required().min(8).regex(/[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]/),
location : Joi.string().required(),
availableDailyHours : Joi.string() ,
birthDate : Joi.date().required() ,
interests : Joi.array() ,
attendedEvents : Joi.array() ,
previousJobs : Joi.array() ,
previousTasks : Joi.array(),
previousProjects : Joi.array() ,
certificates : Joi.array() , 
coursesTaken : Joi.array(),
}
const result = Joi.validate(req.body, schema);
if (result.error) 
    return res.status(400).send({ error: result.error.details[0].message });
else {
const found = members.some(member => member.userName === req.body.userName);
if ( found )
    return res.status(400).send({ error: "username is already in use" });
 else {
    const member = new Member( userName, availableDailyHours, location, name, email, password, birthDate , interests , attendedEvents , previousJobs , previousTasks , previousProjects , reviews , reviewers , certificates , coursesTaken , contractSigned , expirationDate , age );
   members.push(member)

}
}
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

return res.send(data);
});


router.get( '/:username' , (req,res)=>{
    const username = req.params.username;
    const found = members.some(member => member.userName === username);
if (found){
   // res.json({ members:members.filter(member => member.userName == username) })
   const member = members.find(member=> member.userName === username);
   const data = `username : ${member.userName}<br> 
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
   `  ;
res.send(data);
}
else {
    res.status(404).json({err : 'OFFF'});
}
    
});


// update info about a member
router.put('/:username', (req, res) => {
    const userName =req.params.username;
    const found = members.some(member => member.userName === req.params.username)
    if  (found){
    const member = members.find(member => member.userName === userName);
   
const schema = {
    userName : Joi.string() ,
    email: Joi.string().email(),
    name: Joi.string(),
    password: Joi.string().min(8).regex(/[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]/),
    location : Joi.string(),
    availableDailyHours : Joi.string() ,
    birthDate : Joi.date() ,
    interests : Joi.array() ,
    attendedEvents : Joi.array() ,
    previousJobs : Joi.array() ,
    previousTasks : Joi.array(),
    previousProjects : Joi.array() ,
    certificates : Joi.array() , 
    coursesTaken : Joi.array(),
    }
    const result = Joi.validate(req.body, schema);
    if (result.error) 
        return res.status(400).send({ error: result.error.details[0].message });

    if ( req.body.userName){
        const found = members.some(member => member.userName === req.body.userName);
        if ( found )
            return res.status(400).send({ error: "username is already in use" });
    }
    member.userName = (req.body.userName )?  req.body.userName : member.userName;
    member.availableDailyHours = (req.body.availableDailyHours)?  req.body.availableDailyHours : member.availableDailyHours ;
    member.location = (req.body.location)? req.body.location : member.location ;
    member.name = (req.body.name )? req.body.name : member.name;
    member.email = (req.body.email )? req.body.email :  member.email  ;
    member.password = (req.body.password ) ? req.body.password :  member.password;
    member.birthDate = (req.body.birthDate ) ?  req.body.birthDate : member.birthDate ;
    member.interests = (req.body.interests ) ?  req.body.interests : member.interests ;
    member.attendedEvents = (req.body.attendedEvents  ) ?  req.body.attendedEvents : member.attendedEvents  ;  
    member.previousJobs = (req.body.previousJobs  ) ? req.body.previousJobs : member.previousJobs ;  
    member.previousTasks = (req.body.previousTasks ) ?  req.body.previousTasks : member.previousTasks ;
    member.previousProjects = (req.body.previousProjects ) ? req.body.previousProjects : member.previousProjects;
    member.reviews = (req.body.reviews )?   req.body.reviews : member.reviews ;
    member.reviewers = (req.body.reviewers  ) ?   req.body.reviewers : member.reviewers ;
    member.certificates = (req.body.certificates  ) ?  req.body.reviewers : member.reviewers ;
    member.coursesTaken = (req.body.coursesTaken  ) ?   req.body.coursesTaken : member.coursesTaken ;
    member.contractSigned = (req.body.contractSigned ) ?   req.body.contractSigned : member.contractSigned ;
    
    
    const data = `username : ${member.userName}<br> 
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
    `;
 res.send(data);
   
}
else  {
    return res.status(400).send({ error: "username doesn't exist" });
}

});



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
 }
 );

module.exports = router




