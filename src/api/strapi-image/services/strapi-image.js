'use strict';

/**
 * strapi-image service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strapi-image.strapi-image');
