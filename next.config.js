/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['pludopoquo.beget.app'],
    },
    env: {
        PUBLIC_URL: process.env.STRAPI_PUBLIC_URL
    }
}

module.exports = nextConfig
