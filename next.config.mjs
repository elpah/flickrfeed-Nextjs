/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["live.staticflickr.com"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
