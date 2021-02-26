const catchAsync = require('../utilities/catchAsync');
const { cacheService } = require('../services');
const logger = require('../config/logger');

const getCacheByKey = catchAsync(async (req, res) => {
  const payload = req.params.key;
  const data = await cacheService.findCacheByKey(payload);
  if (data === undefined || data === null) {
    logger.info('Cache miss');
  } else {
    logger.info('Cach miss');
    res.send(data);
  }
});

module.exports = {
  getCacheByKey,
};
