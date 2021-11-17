module.exports = {
  distDir: '.build',
  async redirects() {
    return [
      {
        source: '/shipments/:id',
        destination: '/shipments/:id/info',
        permanent: true,
      },
      {
        source: '/orders/:id',
        destination: '/orders/:id/info',
        permanent: true,
      },
    ];
  },
};
