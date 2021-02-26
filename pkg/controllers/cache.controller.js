const uniqueString = require('unique-string');
const catchAsync = require('../utilities/catchAsync');
const { cacheService } = require('../services');
const logger = require('../config/logger');

const getCacheByKey = catchAsync(async (req, res) => {
  const payload = req.params.key;
  const data = await cacheService.findCacheByKey(payload);
  if (data === undefined || data === null) {
    logger.info('Cache miss');
    const randomString = uniqueString();
    await cacheService.createKey(payload, randomString);
    res.send(randomString);
  } else {
    logger.info('Cache hit');
    res.send(data.toJSON());
  }
});

const findAllKeys = catchAsync(async (req, res) => {
  const data = await cacheService.allKeys();
  res.send(data);
});

module.exports = {
  getCacheByKey,
  findAllKeys,
};
