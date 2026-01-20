/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/mysite",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
