const joi = require('joi');

module.exports = {
    signup : {
        body: joi.object({
            country_code : joi.string().required('Country has to be selected.'),
            email : joi.string().required('Email is required.'),
            name: joi.string().required('User name is required.'),
            organization: joi.string().required('Organization name is required.'),
            password : joi.string().required('Password is required.'),
            phone: joi.string().min(10).max(10).required('Phone is required.')
        })
    }
}