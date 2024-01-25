/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'iili.io',
          },
        ],
      },
};

export default nextConfig;
