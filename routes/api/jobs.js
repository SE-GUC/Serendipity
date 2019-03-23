const express = require('express')
const Joi = require('joi');
const router = express.Router()
const mongoose = require('mongoose')
router.use(express.json())
// We will be connecting using database 
const Job = require('../../models/Job')
const validator = require('../../validations/jobValidations')

// list all jobs
router.get('', async(req, res) => {
   const jobs = await Job.find()
   res.json({data: jobs})
});


// Get a certain job



// Delete a job


// Update a job


//create a job
// create a new member and add it to the database
router.post('/', async (req, res) => {
   try {
       const isValidated = validator.createValidation(req.body)
       if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
       const newJob = await Job.create(req.body)
       res.json({msg:'Job created successfully', data: newJob})
      }
      catch(error) {
          // We will be handling the error later
          console.log(error)

      } 
});

module.exports = router