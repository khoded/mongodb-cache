const Joi = require('joi');

const getCacheByKey = {
  params: Joi.object().keys({
    key: Joi.string(),
  }),
};

module.exports = {
  getCacheByKey,
};
