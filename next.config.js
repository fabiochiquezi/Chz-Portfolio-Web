/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
    //   images: {
    //     loader: 'imgix',
    //     path: ''
    //   },
      async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
        ]
      }
  }
