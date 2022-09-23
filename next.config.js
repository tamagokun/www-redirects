module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: process.env.REDIRECT_URL + ":path*",
        permanent: true,
      },
    ];
  },
};
