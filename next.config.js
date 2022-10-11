const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
