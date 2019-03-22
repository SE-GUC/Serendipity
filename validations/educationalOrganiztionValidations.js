const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            userName: Joi.string().min(3).required(),
            name: Joi.string().required(),
            password: Joi.string().min(8).required(),
            email: Joi.email().required(),
            masterClasses: Joi.array().items(),
            courses: Joi.array().items(),
            workshops: Joi.array().items(),
            trainers: Joi.array().items(),
            educators: Joi.array().items(),
            trainingPrograms: Joi.array().items(),
            description: Joi.string().required(),
            contract: Joi.boolean().required(),
            expirationDate: Joi.string().required()
        }

        return Joi.validate(request, createSchema)
}
}