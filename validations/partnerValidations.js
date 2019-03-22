const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            email: Joi.email().required(),
            username: Joi.string().min(5).max(100),
            name: Joi.number().required(),
            password: Joi.string().required().min(8).regex(/[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]/),
            description : Joi.string().required() ,
            partners : Joi.string (),
            boardOfMembers : Joi.string().required() ,
            fieldOfWork : Joi.string().required(),
            vacancies : Joi.string() ,
            pastProjects : Joi.string()

        }

        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            email: Joi.email(),
            username: Joi.string().min(5).max(100),
            name: Joi.number(),
            password: Joi.string().min(8).regex(/[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]/),
            description : Joi.string() ,
            partners : Joi.string() ,
            boardOfMembers : Joi.string (),
            fieldOfWork : Joi.string(),
            vacancies : Joi.string (),
            pastProjects : Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}
