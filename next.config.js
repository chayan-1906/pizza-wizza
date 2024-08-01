module.exports = {
    reactStrictMode: false,
    trailingSlash: false,
    images: {
        remotePatterns: [
            /** test */
            {
                protocol: 'https',
                hostname: 'www.vegrecipesofindia.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}
