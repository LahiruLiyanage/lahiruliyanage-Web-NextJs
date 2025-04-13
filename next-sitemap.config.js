module.exports = {
    siteUrl: 'https://www.lahiruliyanage.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: '/api/' },
        ],
    },
}