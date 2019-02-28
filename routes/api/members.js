const express = require('express')
const router = express.Router()

router.use(express.json())
// We will be connecting using database 
const Member = require('../../models/Member')

var members = [
    // member = new Member( userName, availableDailyHours, location, name, email, password, birthDate ,interests , attendedEvents , previousJobs , previousTasks , previousProjects , reviews , reviewers , certificates , coursesTaken , contractSigned , expirationDate );

    new Member('hagerhilal' ,'8','el-rehab', 'Hager Hilal', 'hagerhilal2@gmail.com', 'Hh123654!', new Date(1998,02,10) ,['coding'],  [ ]  , [] , [] , [] , '4' , [] , [] , [('1','SE','GUC', '3', 'Aisha', '300', 'software engineering', 'Cairo')] , 'True' , '1/6/2020' , Age(new Date(1998,02,10))),
    new Member('hamadahilal' ,'12','el-rehab', 'Hamada Hilal', 'hamadahilal@gmail.com', 'HH999999$', new Date (2002,02,04) ,['mechamics' , 'football'],  []  , [] , [] , [] , '4' , [] , [] , [('2','DB','GUC', '4', 'Wael', '3000', 'Databases', 'Cairo')] , 'True' , '1/6/2022' , Age(new Date(2002,02,04)))

];


router.get('', (req, res) => {
    res.send({data:members})
})


function Age(birthday) { // birthday is a date
    var d = new Date();
    var t = new Date (birthday)
    return d.getFullYear() - t.getFullYear() ;
}

function checkPassword(password) {
    var format = /[ !@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]/;
 //   console.error("password must contains at least a capital letter, a small letter, a specail letter ,  a number " );
   return  (  /[a-z]/.test(password) && /[A-Z]/.test(password) && password.length > 8 && format.test(password) && /[0-9]/.test(password)  )  ;

}

function checkUserName (username){
    
for ( let m in members){
if (m.userName == username) 
return false ;
}
return true;
}

function checkMail(mail){
   
    for ( let m in members){
    if (m.mail == mail) 
    return false 
    }
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) && true ;    
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
if ( checkMail(email) && checkPassword(password) &&  checkUserName(userName) ){
    const member = new Member( userName, availableDailyHours, location, name, email, password, birthDate , interests , attendedEvents , previousJobs , previousTasks , previousProjects , reviews , reviewers , certificates , coursesTaken , contractSigned , expirationDate , age );
   members.push(member)
}
else {
    console.error("invalid inputs");
}
   res.send(members);
});


router.get( '/:username' , (req,res)=>{
    const username = req.params.username;
     const found = members.some(member => member.userName === username);
if (found){
    res.json({ members:members.filter(member => member.userName == username) })
}
else {
    res.status(404).json({err : 'OFFF'});
}
    
});


// update info about a member
router.put('/:username', (req, res) => {
    const userName =req.params.username;
    const member = members.find(member => member.userName === userName);
   
    member.userName = (req.body.userName && checkUserName(req.body.userName))?  req.body.userName : member.userName;
    member.availableDailyHours = (req.body.availableDailyHours)?  req.body.availableDailyHours : member.availableDailyHours ;
    member.location = (req.body.location)? req.body.location : member.location ;
    member.name = (req.body.name )? req.body.name : member.name;
    member.email = (req.body.email && checkMail(req.body.email))? req.body.email :  member.email  ;
    member.password = (req.body.password && checkPassword(req.body.password)) ? req.body.password :  member.password;
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
    
    res.json({ msg : 'updated ' , member});
});



router.delete('/:username' , (req,res)  =>{
    const memberUserName = req.params.username ;

    const member = members.find(member => member.userName == memberUserName);
    const index = members.indexOf(member);
    members.splice(index,1)
    res.send(members)
 }
 );



module.exports = router




