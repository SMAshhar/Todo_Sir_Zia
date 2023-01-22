/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "https://mock-api-json-api.vercel.app/api/:path*"
        }
      ]
    }
}

module.exports = nextConfig
