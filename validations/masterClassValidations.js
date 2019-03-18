const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            title:Joi.string().required().min(3).max(50),
            duration:Joi.string().required(),
            price:Joi.number().required(),
            description:Joi.string().required(),
            location:Joi.string().required(),  
            eduid:Joi.number().required(),
            listofcoursesids :Joi.array().items().required(), 
            listofworkshopids :Joi.array().items().required(),
            applicantsids :Joi.array().items().required()
            
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
            eduid:Joi.number(),
            listofcoursesids :Joi.array().items(), 
            listofworkshopids :Joi.array().items(),
            applicantsids :Joi.array().items()
        }

        return Joi.validate(request, updateSchema)
    }, 
}