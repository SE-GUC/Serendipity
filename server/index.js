const Joi = require('joi');//not needed
const uuid = require('uuid');//not needed
const express = require('express')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors')
const passport = require('passport');//for login



const educationalOrganizations = require('./routes/api/educationalOrganizations')
const courses = require('./routes/api/courses')
const workshops = require('./routes/api/workshops')
const members = require('./routes/api/members')
const masterclasses = require('./routes/api/masterclasses')
const partners = require('./routes/api/partners')
const jobs=require('./routes/api/jobs')
const admins = require('./routes/api/admins')
const assessments=require('./routes/api/assessments')


const app = express()




const db = require('./config/keys').mongoURI
// console.log(db);
mongoose
    .connect(db , { useNewUrlParser: true })
    //.connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))


    process.on('uncaughtException', function (err) {
      console.log(err);
  }); 
// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(passport.initialize()) //login
require('./config/passport')(passport)//login


app.get('/', (req, res) => {

  res.send(`<h1>Welcome to LirtenHub</h1>
  <a href="/api/courses">Courses</a>
  <a href="/api/workshops">Workshops</a>
  <a href="/api/members">members</a>
  <a href="/api/admins">admins</a>
  <a href="/api/masterclasses">masterclasses</a>
  <a href="/api/partners">Partners</a>
  <a href="/api/educationalOrganizations">Educational Organizations</a>
  <a href="/api/jobs">Job</a>
  <a href="/api/assessments">Assessments</a>
  `);

});

///login trial
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken')
// const tokenKey = require('../../config/keys').secretOrKey
// router.post('/login', async (req, res) => {
// 	try {
// 		const { email, password } = req.body;
//         const eduOrg = await EducationalOrganization.findOne({ email });
//         const partner = await EducationalOrganization.findOne({ email });
//         const eduOrg = await EducationalOrganization.findOne({ email });
//     if (!eduOrg) return res.status(404).json({ email: 'Email does not exist' });
    
//         const match = bcrypt.compareSync(password, eduOrg.password);
//         console.log(match)
//         console.log(password)
//         console.log(eduOrg.password)
// 		if (match) {
//             const payload = {
//                 id: eduOrg.id,
//                 name: eduOrg.name,
//                 email: eduOrg.email
//             }
//             const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
//             return res.json({token: `Bearer ${token}`})
//         }
// 		else return res.status(400).send({ password: 'Wrong password' });
// 	} catch (e) {}
// });
//////


// Direct routes to appropriate files

app.use('/api/assessments', assessments)

app.use('/api/educationalOrganizations', educationalOrganizations)

app.use('/api/courses', courses)

app.use('/api/workshops', workshops)

app.use('/api/members', members)

app.use('/api/admins',admins)

app.use('/api/masterclasses', masterclasses)

app.use('/api/partners', partners)

app.use('/api/jobs', jobs)



// Handling 404

app.use((req, res) => {

  res.status(404).send({ err: "We can not find what you are looking for" });

});


const port = process.env.PORT || 5000









app.listen(port, () => console.log(`Server on ${port}`))

