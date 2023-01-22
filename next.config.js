/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    async rewrites () {
      return(
        {
          source:"/api/:path*",
          destination: "http://localhost:3001/api/:path*"
          // this means, that we can replace the destination path from a much simpler source path  
        }
      )
    }
  },
}

module.exports = nextConfig
