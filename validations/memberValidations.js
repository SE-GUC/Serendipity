const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            email: Joi.email().required(),
            userName: Joi.string().min(5).max(100).required(),
            name: Joi.number().required(),
            password: Joi.string().required().min(8).regex(/[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]/),
            availableDailyHours : Joi.number.required() ,
            location : Joi.string ().required,
            birthdate : Joi.date.required() ,
            interests : Joi.array(),
            attendedEvents : Joi.array() ,
            previousProjects : Joi.array(),
            previousTasks : Joi.array(),
            previousJobs : Joi.array(),
            review : Joi.array(),
            reviewers : Joi.array(),
            certificates : Joi.array(),
            coursesTaken : Joi.array(),
            contractSigned : Joi.boolean(),
            expirationDate : Joi.date(),
            age : Joi.number(),
            skills : Joi.array()
        }

        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            email: Joi.email(),
            userName: Joi.string().min(5).max(100),
            name: Joi.number(),
            password: Joi.string().min(8).regex(/[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]/),
            availableDailyHours : Joi.number ,
            location : Joi.string (),
            birthdate : Joi.date() ,
            interests : Joi.array(),
            attendedEvents : Joi.array() ,
            previousProjects : Joi.array(),
            previousTasks : Joi.array(),
            previousJobs : Joi.array(),
            review : Joi.array(),
            reviewers : Joi.array(),
            certificates : Joi.array(),
            coursesTaken : Joi.array(),
            contractSigned : Joi.boolean(),
            expirationDate : Joi.date(),
            age : Joi.number(),
            skills : Joi.array()
        }

        return Joi.validate(request, updateSchema)
    }, 
}