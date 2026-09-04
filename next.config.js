/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is a single page now. These routes existed before the
  // redesign, so keep them working with real 308s rather than
  // client-side redirects.
  async redirects() {
    return [
      { source: '/projects', destination: '/#projects', permanent: true },
      { source: '/tech',     destination: '/#skills',   permanent: true },
      { source: '/about',    destination: '/#about',    permanent: true },
    ];
  },
};

module.exports = nextConfig;
