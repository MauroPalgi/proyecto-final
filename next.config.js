/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/proyectofinal",
  images: {
    unoptimized: true, // porque no hay server
  },
  trailingSlash: true,
};

module.exports = nextConfig;
