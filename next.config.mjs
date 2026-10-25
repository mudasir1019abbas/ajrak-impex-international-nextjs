/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators:false,
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Old URLs from the previous React app
      { source: "/services", destination: "/products", permanent: true },
      { source: "/global-trade", destination: "/products", permanent: true },
    ];
  },
};

export default nextConfig;
