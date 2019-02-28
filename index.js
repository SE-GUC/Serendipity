const express = require('express')
const Joi = require('joi');
const uuid = require('uuid');
const courses = require('./routes/api/courses')
const workshops = require('./routes/api/workshops')
const masterclasses = require('./routes/api/masterclasses')


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to LirtenHub</h1>
    <a href="/api/courses">Courses</a>
    <a href="/api/workshops">Workshops</a>
    <a href="/api/masterclasses">masterclasses</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/courses', courses)
app.use('/api/workshops', workshops)
app.use('/api/masterclasses', masterclasses)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))