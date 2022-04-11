const pluginPackage = require('../../package.json')

const pluginId = pluginPackage.name.replace(
  /^(@[^,.-][\w,-]+\/|strapi-)plugin-/i,
  '',
)

module.exports = pluginId
