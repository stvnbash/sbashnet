const { withContentlayer} = require('next-contentlayer')

// const resumeURL = "https://1drv.ms/b/s!AsvAGOMj9b-tiZ0FaQ68uPVXy2RJFQ?e=Hb4FXL" // this is a direct url but onedrive isn't showing preview, only download button
const resumeURL = "https://1drv.ms/b/s!AsvAGOMj9b-tiZ0FOvglVcRMWqO-Jw?embed=1&em=2" // this is a onedrive preview, meant for embedding

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
