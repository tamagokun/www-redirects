module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: process.env.REDIRECT_URL,
        permanent: true,
      },
    ];
  },
};
