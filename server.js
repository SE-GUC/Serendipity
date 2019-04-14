const Joi = require('joi');//not needed
const uuid = require('uuid');//not needed
const express = require('express')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors')




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
   .connect(db,{useNewUrlParser: true})
    // .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))


    process.on('uncaughtException', function (err) {
      console.log(err);
  }); 

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,'client', 'build','index.html'));
  });

  
}

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

// const server = app.listen(process.env.PORT || 5000, function () {
//   const port = server.address().port;
//   console.log("Express is working on port " + port);
// });