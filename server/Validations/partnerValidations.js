const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            email: Joi.string().email().required(),
            name: Joi.string().required(),
            password: Joi.string().required(),
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {

        const updateSchema = {
            email: Joi.string().email(),
            name: Joi.string(),
            password: Joi.string(),
            description: Joi.string(),
            partners: Joi.array().items(),
            boardOfMembers: Joi.array().items(),
            fieldOfWork: Joi.string(),
            vacancies: Joi.array().items(),
            pastProjects: Joi.array().items(Joi.string()),
        }



        return Joi.validate(request, updateSchema)

    }, 

}

