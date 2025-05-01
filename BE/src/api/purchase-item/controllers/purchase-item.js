'use strict';

/**
 * purchase-item controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::purchase-item.purchase-item', ({ strapi }) => ({
  async find(ctx) {
    // Call the default find method
    const { data, meta } = await super.find(ctx);
    
    // Populate the image and product_type fields
    const withPopulate = await Promise.all(
      data.map(async (item) => {
        const populated = await strapi.entityService.findOne('api::purchase-item.purchase-item', item.id, {
          populate: ['image', 'product_type']
        });
        return {
          ...item,
          attributes: {
            ...item.attributes,
            image: populated.image,
            product_type: populated.product_type
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
      populate: ['image', 'product_type']
    };
    
    // Call the default findOne method
    const response = await super.findOne(ctx);
    return response;
  }
})); 