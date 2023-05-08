/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    )
    return cfg
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.coupangcdn.com',
        port: '',
        pathname: '/thumbnails/remote/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/*/**',
      },
    ],
  },

}

module.exports = nextConfig
