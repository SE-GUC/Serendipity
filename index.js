const express = require('express')

const jobs=require('./routes/api/jobs')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Vacancy jobs</h1>

    <a href="/api/jobs">Job</a>
    `);
})

// Direct routes to appropriate files

app.use('/api/jobs', jobs)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for sorry'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))