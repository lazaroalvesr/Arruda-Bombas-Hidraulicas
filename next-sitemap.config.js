/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.arrudabombas.com.br',
    generateRobotsTxt: true, // Gera o robots.txt automaticamente
    sitemapSize: 5000,
    exclude: ['/api/*', '/private/*'], // Exclui rotas indesejadas
};