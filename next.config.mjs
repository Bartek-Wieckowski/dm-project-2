/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: true,
     images: {
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
      },
    ],
  },
   experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
