/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    assetPrefix: isProd ? '/': '',
    basePath: isProd ? '': '',
    trailingSlash: true,
    images: {unoptimized: true},
};

export default nextConfig;
