const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            memberName: Joi.string().min(3).max(500).required(),
            expertName: Joi.string().min(3).max(100).required(),
            masterClass: Joi.string().min(3).max(100),
            educationalOrg: Joi.string().min(3).max(100),
            phoneNumber : Joi.string().min(3).max (20),
            daysAvailable : Joi.string().min(3).max(200).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            memberName: Joi.string().min(3).max(500),
            expertName: Joi.string().min(3).max(100),
            masterClass: Joi.string().min(3).max(100),
            educationalOrg: Joi.string().min(3).max(100),
            phoneNumber : Joi.string().min(3).max (20),
            daysAvailable : Joi.string().min(3).max(200)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
