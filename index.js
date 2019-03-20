
/*const express = require("express");
const Joi = require ('joi');
const uuid = require ('uuid');
const assessment = require("./routes/api/assessments");

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to LirtenHub!</h1>
    <a href="/api/assessments">Assessments</a>`
*/
const express = require('express')




const Joi = require('joi');
const uuid = require('uuid');


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
app.use(express.json())

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


// Direct routes to appropriate files
app.use('/api/assessments', assessments)

// Direct routes to appropriate files 

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


const port = 3000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));

/*const port = 3000

app.listen(port, () => console.log(`Server up and running on port ${port}`))
*/
