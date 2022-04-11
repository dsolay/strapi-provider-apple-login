'use strict'

module.exports = {
  callback(context) {
    return strapi.plugin('apple').service('appleService').callback(context)
  },
}
