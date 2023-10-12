/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
  env: {
    api_url: 'http://localhost:3006/v1/'
  }
}

export default nextConfig