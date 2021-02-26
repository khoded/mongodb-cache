const { Cache } = require('../models');

/**
 * Query for cache
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
const findCacheByKey = async (payload) => {
  try {
    const cache = await Cache.findOne({ key: payload });
    return cache;
  } catch (error) {
    return error;
  }
};

const createKey = async (keyId, payload) => {
  try {
    const key = await Cache.updateOne(
      { key: keyId },
      {
        $set: {
          data: payload,
        },
      },
      {
        upsert: true,
      }
    );
    return key;
  } catch (error) {
    return error;
  }
};

const allKeys = async () => {
  try {
    const keys = await Cache.find();
    return keys;
  } catch (error) {
    return error;
  }
};

module.exports = {
  findCacheByKey,
  createKey,
  allKeys,
};
