import { prefixPluginTranslations } from '@strapi/helper-plugin'
import { map } from 'async'
import pluginPackage from '../../package.json'
import pluginId from './pluginId'
import Initializer from './components/Initializer'
import PluginIcon from './components/PluginIcon'

const name = pluginPackage.strapi.name

export default {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name,
      },
      Component: async () => {
        const component = await import(
          /* webpackChunkName: "[request]" */ './pages/App'
        )

        return component
      },
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    })
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    })
  },

  bootstrap() {},
  async registerTrads({ locales }) {
    const importedTrads = await map(locales.map, async (locale) => {
      const result = {
        data: {},
        locale,
      }

      try {
        const { default: data } = await import(`./translations/${locale}.json`)

        result.data = prefixPluginTranslations(data, pluginId)
        return result
      } catch {
        return result
      }
    })

    return importedTrads
  },
}
