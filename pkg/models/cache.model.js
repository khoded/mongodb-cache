const mongoose = require('mongoose');
const { convertToJSON } = require('../utilities/convertJSON');

const cacheSchema = mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// converts mongoose to json
cacheSchema.plugin(convertToJSON);

/**
 * @typedef cache
 */
const cache = mongoose.model('cache', cacheSchema);

module.exports = cache;
