/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['45.130.43.182'],
    },
    env: {
        PUBLIC_URL: process.env.STRAPI_PUBLIC_URL
    }
}

module.exports = nextConfig
