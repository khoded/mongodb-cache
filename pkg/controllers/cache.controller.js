const httpStatus = require('http-status');
const uniqueString = require('unique-string');
const catchAsync = require('../utilities/catchAsync');
const ApiError = require('../utilities/ApiError');
const { cacheService } = require('../services');
const logger = require('../config/logger');

const getCacheByKey = catchAsync(async (req, res) => {
  const payload = req.params.key;
  if (!payload) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Cache key not provided');
  }
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

const createUpdateCacheData = catchAsync(async (req, res) => {
  const payload = req.params.key;
  const body = req.body.data;
  if (!payload || !body) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Request parameters not found');
  }
  const data = await cacheService.createUpdateCache(payload, body);
  res.send(data);
});

module.exports = {
  getCacheByKey,
  findAllKeys,
  createUpdateCacheData,
};
