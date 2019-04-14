const Joi = require('./node_modules/joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            full_name: Joi.string().required(),
            username: Joi.string().required () ,
            password: Joi.string().required().min(8),
            email: Joi.string().email().required()
        }

        return Joi.validate(request, createSchema)
    },

    
    updateValidation: request => {
        const updateSchema = {
            full_name: Joi.string(),
            username: Joi.string() ,
            password: Joi.string().min(8),
            email: Joi.string().email()
            
        }

        return Joi.validate(request, updateSchema)
    }, 
}