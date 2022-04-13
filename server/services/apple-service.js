'use strict'

const AppleSignIn = require('apple-sign-in-rest').default

const getConfig = (key) => {
  return strapi.config.get(`plugin.apple.${key}`)
}

module.exports = () => ({
  callback(context) {
    const { code } = context.request.body

    context.redirect(`${getConfig('siteBaseUrl')}/auth/apple?code=${code}`)
  },

  async claim(code) {
    const config = {
      clientId: getConfig('clientId'),
      teamId: getConfig('teamId'),
      keyIdentifier: getConfig('keyIdentifier'),
    }

    if (getConfig('privateKey'))
      config.privateKey = getConfig('privateKey').replace(/\\n/g, '\n')
    else config.privateKeyPath = `${__dirname}/${getConfig('privateKeyPath')}`

    const appleSignIn = new AppleSignIn(config)

    const clientSecret = appleSignIn.createClientSecret({
      expirationDuration: 5 * 60, // define your own expiration client secret
    })

    const tokenResponse = await appleSignIn.getAuthorizationToken(
      clientSecret,
      code,
      {},
    )

    return await appleSignIn.verifyIdToken(tokenResponse.id_token, {})
  },
})
