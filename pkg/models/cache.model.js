const mongoose = require('mongoose');
const { convertJSON } = require('../utilities/index');

const cacheSchema = mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
    },
    data: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// converts mongoose to json
cacheSchema.plugin(convertJSON);

/**
 * @typedef cache
 */
const cache = mongoose.model('cache', cacheSchema);

module.exports = cache;
