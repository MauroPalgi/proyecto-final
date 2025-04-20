/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs", // GitHub Pages sirve desde /docs
  basePath: "/proyecto-final",
  images: {
    unoptimized: true, // porque no hay server
  },
  trailingSlash: true,
};

module.exports = nextConfig;
