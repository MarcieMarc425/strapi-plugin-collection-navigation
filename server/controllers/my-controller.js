'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('prev-next-btns')
      .service('myService')
      .getWelcomeMessage();
  },
});
