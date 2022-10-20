/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images : {
    domains : ['localhost'],
    loader : "akamai",
    path: "",
  },
  basePath: "/dark-blog-page",
  assetPrefix: "/dark-blog-page",
}

module.exports = nextConfig



