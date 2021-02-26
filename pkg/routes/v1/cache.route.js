const express = require('express');
const validate = require('../../middlewares/validate');
const cacheValidation = require('../../validations/cache.validation');
const cacheController = require('../../controllers/cache.controller');

const router = express.Router();

router.get('/cache/:key', validate(cacheValidation.getCacheByKey), cacheController.getCacheByKey);
router.get('/cache', cacheController.findAllKeys);
module.exports = router;
