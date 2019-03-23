const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            title:Joi.string().required().min(2).max(50),
            duration:Joi.string().required(),
            price:Joi.number().required(),
            description:Joi.string().required(),
            location:Joi.string().required(),  
            Eduorganization:Joi.string(),
            courseIDs :Joi.array().items(), 
            workshopsIDs :Joi.array().items(),
           // applicants :Joi.array().items()
            
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            title:Joi.string(),
            duration:Joi.string(),
            price:Joi.number(),
            description:Joi.string(),
            location:Joi.string(),  
            Eduorganization:Joi.string(),
            courseIDs :Joi.array().items(), 
            workshopsIDs :Joi.array().items(),
            //applicants :Joi.array().items()
        }

        return Joi.validate(request, updateSchema)
    }, 
}