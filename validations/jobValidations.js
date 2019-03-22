const Joi = require('joi')

module.exports = {
createValidation: request => {
        const createSchema = {
            title: Joi.string().required(),
            state: Joi.string().required,
            startdate: Joi.date().required(),
            enddate: Joi.date().required(),
            skills : Joi.array().required (),
            location : Joi.string().required() ,
            salary : Joi.string().required() ,
            candidates : Joi.string().required(),
            dailyhours : Joi.string ().required(),
            partner : Joi.string ().required(),
            description : Joi.string().required()

        }

        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
    const updateSchema = {
        title: Joi.string(),
        state: Joi.string(),
        startdate: Joi.date(),
        enddate: Joi.date(),
        skills : Joi.array(),
        location : Joi.string() ,
        salary : Joi.string() ,
        candidates : Joi.string(),
        dailyhours : Joi.string (),
        partner : Joi.string (),
        description : Joi.string()

    }

    return Joi.validate(request, updateSchema)
},

}



};