const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            title: Joi.string().min(3).max(500).required(),
            state: Joi.string().min(3).max(100).required(),
            location:Joi.string().min(3).max(100).required(),
            startdate:Joi.date(),
            enddate: Joi.date(),
            location:Joi.string().required().min(4),
            salary:Joi.number().required(),
            dailyhours:Joi.number().required(),
            partner: Joi.string().required().min(4),
            description: Joi.string().min(3).required(),
            applicants:Joi.array().items()
      
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
      title: Joi.string().min(3),
      state: Joi.string().min(3),
      startdate: Joi.date(),
      enddate: Joi.date(),
      location:Joi.string().min(4),
      salary:Joi.number(),
      dailyhours:Joi.number(),
      partner: Joi.string().min(4),
      description: Joi.string().min(3),
      applicants:Joi.array().items()
        }

        return Joi.validate(request, updateSchema)
    }, 
}