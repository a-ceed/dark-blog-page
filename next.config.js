/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images : {
    domains : ['localhost'],
    loader : "akamai",
    path: "",
  },
  basePath: "",
  assetPrefix: "",
}

module.exports = nextConfig
