/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "cdn.shopify.com",
      },
    ],
  },
}
