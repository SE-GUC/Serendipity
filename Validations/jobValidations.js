const Joi = require('joi')



module.exports = {

    createValidation: request => {

        const createSchema = {

            title: Joi.string().min(3).max(500).required(),



            state: Joi.string().min(3).max(100),



            location:Joi.string().min(3).max(100).required(),

            startdate:Joi.date(),

            enddate: Joi.date(),

            

            salary:Joi.number().required(),

            dailyhours:Joi.number().required(),

            partner: Joi.string().min(4),



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
      applicants:Joi.array().items(),
      taken:Joi.string().min(4)
        }



        return Joi.validate(request, updateSchema)

    }, 
    applyValidation : request => {

        const applySchema = {

            applicantId : Joi.string()

        }

        return Joi.validate(request,applySchema)

    }
}