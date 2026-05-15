/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.arrudabombas.com.br',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  
  // Rotas excluídas
  exclude: [
    '/api/*',
    '/admin/*',
    '/private/*',
    '/404',
    '/500',
  ],

  // Rotas adicionadas manualmente com prioridade customizada
  additionalPaths: async (config) => {
    return [
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/bomba-de-concreto',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/bomba-de-concreto/carretinha-pequena',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/bomba-de-concreto/carretinha-rebocavel',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/bomba-de-concreto/p700',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/bomba-de-concreto/multimix',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/bomba-de-concreto/betonbomba',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/o-que-e-bomba-de-concreto',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
    ];
  },

  // Configurações avançadas de robots.txt
  robotsTxtOptions: {
    sitemaps: [
      'https://www.arrudabombas.com.br/sitemap.xml',
      'https://www.arrudabombas.com.br/sitemap-0.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*', '/private/*'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
  },
};