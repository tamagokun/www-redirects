module.exports = {
  async redirects() {
    return [
      {
        source: "/*",
        destination: process.env.REDIRECT_URL,
        permanent: true,
      },
    ];
  },
};
