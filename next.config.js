/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['localhost'],
    },
    env: {
        PUBLIC_URL: process.env.STRAPI_PUBLIC_URL
    }
}

module.exports = nextConfig
