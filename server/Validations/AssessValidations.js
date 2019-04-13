const Joi = require('joi')



module.exports = {

    createValidation: request => {

        const createSchema = {

            memberName: Joi.string().min(10).max(500).required(),

            expertName: Joi.string().min(10).max(100).required(),

            masterClass: Joi.string().min(10).max(100).required(),

            educationalOrg: Joi.string().min(10).max(100).required(),

            phoneNumber : Joi.number().min(11).max (20).required(),

            daysAvailable : Joi.string().min(50).max(200).required()

        }



        return Joi.validate(request, createSchema)

    },



    updateValidation: request => {

        const updateSchema = {

            memberName: Joi.string().min(10).max(500),

            expertName: Joi.string().min(10).max(100),

            masterClass: Joi.string().min(10).max(100),

            educationalOrg: Joi.string().min(10).max(100),

            phoneNumber : Joi.number().min(11).max (20),

            daysAvailable : Joi.string().min(50).max(200)

        }



        return Joi.validate(request, updateSchema)

    }, 

}