module.exports = [
  {
    method: 'POST',
    path: '/callback',
    handler: 'appleController.callback',
    config: {
      policies: [],
    },
  },
]
