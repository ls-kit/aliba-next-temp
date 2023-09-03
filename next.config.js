/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["img.icons8.com", "admin.alibainternational.com", "cbu01.alicdn.com","lh3.googleusercontent.com"],
    },
};

module.exports = nextConfig;
