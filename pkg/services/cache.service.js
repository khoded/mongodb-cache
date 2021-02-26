const { Cache } = require('../models');

/**
 * Query for cache
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
const findCacheByKey = async (payload) => {
  const cache = await Cache.findOne({ key: payload });
  return cache;
};

module.exports = {
  findCacheByKey,
};
