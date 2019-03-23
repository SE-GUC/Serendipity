

const express = require('express')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;



/*const express = require("express");
const Joi = require ('joi');
const uuid = require ('uuid');
const assessment = require("./routes/api/assessments");

const express = require('express')
const app = express()
//DB config
const db = require('./config/keys').mongoURI
const mongoose = require('mongoose')
// Connect to mongo
mongoose
    .connect(db,{ useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))




const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to LirtenHub!</h1>
    <a href="/api/assessments">Assessments</a>`
*/
const express = require('express')
const mongoose = require('mongoose')


const db = require('./config/keys_db').mongoURI
const cors = require('cors')
const app = express()

//connect to database
mongoose
    .connect(db , { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))


   
// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())



const Joi = require('joi');//not needed
const uuid = require('uuid');//not needed


const educationalOrganizations = require('./routes/api/educationalOrganizations')

const courses = require('./routes/api/courses')
const workshops = require('./routes/api/workshops')
const members = require('./routes/api/members')
const masterclasses = require('./routes/api/masterclasses')
const partners = require('./routes/api/partners')
const jobs=require('./routes/api/jobs')
const admins = require('./routes/api/admins')
const assessments=require('./routes/api/assessments')




//yara
//connecting to mongoDB atlas
const app = express()




const db = require('./config/keys').mongoURI



// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.get('/', (req, res) => {
    res.send(`<h1>Welcome to LirtenHub</h1>
    <a href="/api/courses">Courses</a>
    <a href="/api/workshops">Workshops</a>

    <a href="/api/members">members</a>
    <a href="/api/admins">admins</a>


// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
  res.send(`<h1>Welcome to LirtenHub</h1>
  <a href="/api/courses">Courses</a>
  <a href="/api/workshops">Workshops</a>
  <a href="/api/members">members</a>
  <a href="/api/AdminProf">admins</a>
  <a href="/api/masterclasses">masterclasses</a>
  <a href="/api/partners">Partners</a>
  <a href="/api/educationalOrganizations">Educational Organizations</a>
  <a href="/api/jobs">Job</a>
  <a href="/api/assessments">Assessments</a>
  `);
});

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



const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))
// const port = 3000;
// app.listen(port, () => console.log(`Server up and running on port ${port}`));

/*const port = 3000

app.listen(port, () => console.log(`Server up and running on port ${port}`))
*/

