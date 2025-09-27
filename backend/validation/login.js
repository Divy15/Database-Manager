const joi = require('joi');

module.exports = {
    login : {
        body: joi.object({
            email : joi.string().required('Email is required.'),
            password : joi.string().required('Password is required.')
        })
    }
}