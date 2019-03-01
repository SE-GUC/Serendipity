


const express = require('express')

const educationalOrganizations = require('./routes/api/educationalOrganizations')
const courses = require('./routes/api/courses')
const workshops = require('./routes/api/workshops')
const partners = require('./routes/api/partners')
const jobs=require('./routes/api/jobs')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to LirtenHub</h1>
    <a href="/api/courses">Courses</a>
    <a href="/api/workshops">Workshops</a>
    <a href="/api/partners">Partners</a>
    <a href="/api/educationalOrganizations">Educational Organizations</a>
    <a href="/api/jobs">Job</a>
    `);
})

// Direct routes to appropriate files 

app.use('/api/educationalOrganizations', educationalOrganizations)
app.use('/api/courses', courses)
app.use('/api/workshops', workshops)
app.use('/api/partners', partners)
app.use('/api/jobs', jobs)


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000

app.listen(port, () => console.log(`Server up and running on port ${port}`))