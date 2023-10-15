/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
    images: {
      
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'jimdo-storage.freetls.fastly.net',
             
            },
          ],
    },
}

module.exports = nextConfig
