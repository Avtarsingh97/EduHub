const Joi = require('joi');


const signupValidation=Joi.object().key({
    name:Joi.string().required().trim(),
    username:Joi.string().required().trim(),
    email:Joi.string().required().trim(),
    passsword:Joi.string().required().min(8),
    role:Joi.string().valid('mentor','student'.required())
})

const signinValidation = Joi.object().key({
    email:Joi.string().required().trim(),
    passsword:Joi.string().required()
})

module.exports = {signupValidation,signinValidation};