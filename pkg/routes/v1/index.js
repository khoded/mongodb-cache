const express = require('express');
const cacheRoute = require('./cache.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/v1',
    route: cacheRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
