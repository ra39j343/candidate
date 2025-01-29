/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // This ensures proper build output
  distDir: '.next',      // Specify the build output directory
  images: {
    domains: ['avatars.githubusercontent.com'], // Add any image domains you're using
  },
  // Enable if you need to handle specific headers
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ]
  }
}

module.exports = nextConfig 