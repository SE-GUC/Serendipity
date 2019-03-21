const Joi = require('joi')
//file for validations of eduOrg 
//cleaner code
module.exports={
    createValidation: request => {
        const createSchema ={
            userName: Joi.string().min(3).max(16).required(),
            name: Joi.string().required(),
            password: Joi.string().min(8).max(16).required(),
            email: Joi.string().email().required(),
            description: Joi.string().required()
        
        }
        return Joi.validate(request, createSchema)
    },
    updateValidation: request=> {
        const updateSchema ={
            userName: Joi.string().min(3).max(16),
            name: Joi.string(),
            password: Joi.string().min(8).max(16),
            email: Joi.string().email(),
            masterClasses: Joi.array().items(),
            courses: Joi.array().items(),
            workshops: Joi.array().items(),
            trainers: Joi.array().items(),
            educators: Joi.array().items(),
            trainingPrograms: Joi.array().items(),
            description: Joi.string().required(),
      //      contract: Joi.boolean().required(),
       //     expirationDate: Joi.date().required()
            //only admin can update contarct and expiredate
        }
        return Joi.validate(request, updateSchema)
    },
}

//changed type of expirationdate from string to date
//added min 8 to pass
//added condition email() on email