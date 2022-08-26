/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['atnsrc.dev', 'i.imgur.com'],
		formats: ['image/webp'],
	},
};

module.exports = nextConfig;
