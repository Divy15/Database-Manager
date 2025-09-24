const joi = require('joi');

module.exports = {
    country_list_with_filteration : {
        body : joi.object({
            country_name : joi.string().min(1).optional()
        })
    }
}