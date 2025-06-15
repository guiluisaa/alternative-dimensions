/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        port: '',
        pathname: '/api/character/avatar/**'
      }
    ]
  }
};

export default nextConfig;
