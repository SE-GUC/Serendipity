const express = require('express')

const assessment = require('./routes/api/Assessments')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to LirtenHub!</h1>
    <a href="/api/courses">Assessments</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/Assessments', assessment)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))