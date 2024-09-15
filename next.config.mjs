/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? '/gaurabacharya.github.io/': '',
    basePath: isProd ? '/gaurabacharya.github.io': '',
    trailingSlash: true,
    cssModules: true,
     cssLoaderOptions: {
   importLoaders: 1,
  localIdentName: "[]",
 },
};

export default nextConfig;
