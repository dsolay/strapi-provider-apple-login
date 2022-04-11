'use strict'

const AppleSignIn = require('apple-sign-in-rest').default

module.exports = ({ strapi }) => ({
  callback(context) {
    const { code } = context.request.body

    // Change the url to redirect to your front website
    context.redirect(
      `${strapi.config.get('custom.siteBaseUrl')}/auth/apple?code=${code}`,
    )
  },

  claim: async (code, origin) => {
    // read your origin to define the clientId
    const clientId =
      origin && origin === 'website.com' ? 'com.website.www' : 'com.website.app' // change this with your own value

    const appleSignIn = new AppleSignIn({
      /**
       * This secret depends on that login "flow" you trying to create:
       *   - "web login" - this is the "serviceId"
       *   - "ios login" - this is the app "bundleId", choose only this if you trying to
       *                   verify user that has signed into using the native iOS way
       *
       */
      clientId,
      teamId: '<set_your_team_id>',
      keyIdentifier: '<set_your_key_id>',
      privateKeyPath: `${__dirname}/../config/AuthKey_XXXXXXXXXX.p8`, // the name of the AuthKey previously copy/paste under config folder
    })

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
