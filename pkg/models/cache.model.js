const mongoose = require('mongoose');

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

/**
 * @typedef cache
 */
const cache = mongoose.model('cache', cacheSchema);

module.exports = cache;
