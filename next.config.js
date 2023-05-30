/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath : "",
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
/*

  async headers(){
    return [
      {
        source: '/',
        headers : [
          {
              key: 'Content-Security-Policy',
              value:
                "default-src 'self';  script-src 'self'; object-src 'self'; frame-ancestors 'self';",
          },
          {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  }
*/