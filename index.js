
//mongodb+srv://YasmineMaheeb:SerendipityPassWord@cluster0-bufsj.mongodb.net/test?retryWrites=true
const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose')

// replace the uri string with your connection string.
// const DB_User = process.env.DB_USER;
// const DB_Pass = process.env.DB_PASS;
// const uri = `mongodb+srv://${DB_User}:${DB_Pass}@cluster0-bufsj.mongodb.net/test?retryWrites=true`;

// mongoose.connect("mongodb+srv://YasmineMaheeb:SerendipityPassWord@cluster0-bufsj.mongodb.net/test?retryWrites=true",{ useNewUrlParser: true })

const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const Joi = require('joi');


const educationalOrganizations = require('./routes/api/educationalOrganizations')
const courses = require('./routes/api/courses')
const workshops = require('./routes/api/workshops')
const members = require('./routes/api/members')
const masterclasses = require('./routes/api/masterclasses')
const partners = require('./routes/api/partners')
const jobs=require('./routes/api/jobs')
const admins = require('./routes/api/admins')
const assessments=require('./routes/api/assessments')




app.get('/', (req, res) => {
    res.send(`<h1>Welcome to LirtenHub</h1>
    <a href="/api/courses">Courses</a>
    <a href="/api/workshops">Workshops</a>

    <a href="/api/members">members</a>
    <a href="/api/AdminProf">admins</a>A

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
app.use('/api/AdminProf',admins)
app.use('/api/masterclasses', masterclasses)
app.use('/api/partners', partners)
app.use('/api/jobs', jobs)



// Handling 404
app.use((req, res) => {
  res.status(404).send({ err: "We can not find what you are looking for" });
});



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Running server at http://localhost:${PORT}`)
})
/*const port = 3000

app.listen(port, () => console.log(`Server up and running on port ${port}`))
*/
