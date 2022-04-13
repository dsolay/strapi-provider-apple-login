module.exports = [
  {
    method: 'POST',
    path: '/callback',
    handler: 'appleController.callback',
    config: {
      auth: false,
      policies: [],
    },
  },
]
