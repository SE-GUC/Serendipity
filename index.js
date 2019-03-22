
const express = require('express')
const app = express()

const mongoose = require('mongoose')


const assessments = require('./routes/api/assessments')
const db = process.env.assessment
const pass = process.env.password
const uri = `mongodb+srv://${db}:${pass}@cluster0-seluw.gcp.mongodb.net/test?retryWrites=true`;

mongoose.connect ("mongodb+srv://assessment:<password>@cluster0-seluw.gcp.mongodb.net/test?retryWrites=true", {useNewUrlParser: true})



app.use(express.json)
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => res.send (<h1>Assessments</h1>))




// Direct to Route Handlers
app.use('/api/assessments', assessments)

// Direct routes to appropriate files 
app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`));

