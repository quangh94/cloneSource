'use strict';

/**
 * service-stat controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-stat.service-stat', ({ strapi }) => ({
  async find(ctx) {
    // Call the default find method
    const { data, meta } = await super.find(ctx);
    
    // Populate the image field
    const withPopulate = await Promise.all(
      data.map(async (item) => {
        const populated = await strapi.entityService.findOne('api::service-stat.service-stat', item.id, {
          populate: ['image']
        });
        return {
          ...item,
          attributes: {
            ...item.attributes,
            image: populated.image
          }
        };
      })
    );

    return { data: withPopulate, meta };
  },

  async findOne(ctx) {
    // Add populate to the query
    ctx.query = {
      ...ctx.query,
      populate: ['image']
    };
    
    // Call the default findOne method
    const response = await super.findOne(ctx);
    return response;
  }
})); 