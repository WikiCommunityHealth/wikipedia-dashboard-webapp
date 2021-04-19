module.exports = {
  client: {
    service: {
      name: 'wikipedia-dashboard-webapp',
      url: 'http://localhost:3000/graphql',
    },
    includes: [
      'src/**/*.vue',
      'src/**/*.ts',
      'src/**/*.js',
    ],
  },
};
