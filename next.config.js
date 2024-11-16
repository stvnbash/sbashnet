const { withContentlayer} = require('next-contentlayer')

const resumeURL = "https://1drv.ms/b/s!AsvAGOMj9b-tiZ0FaQ68uPVXy2RJFQ?e=Hb4FXL"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/resume',
        destination: resumeURL,
        permanent: false,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
