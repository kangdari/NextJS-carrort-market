/** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   experimental: {
//     reactRoot: true,
//     /*  runtime: "nodejs",
//     serverComponents: true, */
//   },
//   images: {
//     domains: ["imagedelivery.net", "videodelivery.net"],
//   },
// };
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
    /*  runtime: "nodejs",
    serverComponents: true, */
  },
  // async rewrites() {
  //   console.log(process.env.NODE_ENV)
  //   if (process.env.NODE_ENV !== 'production') {
  //     return [
  //       {
  //         destination: process.env.DESTINATION_URL,
  //         source: process.env.SOURCE_PATH,
  //       },
  //     ]
  //   }
  //
  //   return []
  // },
  // images: {
  //   domains: ['imagedelivery.net', 'videodelivery.net'],
  // },
};

module.exports = nextConfig
