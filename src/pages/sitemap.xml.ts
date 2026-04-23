import constants from '../data/constants.json' with { type: 'json' };

interface SitemapRoute {
  path: string;
  changefreq: 'weekly' | 'monthly';
  priority: number;
}

const routes: SitemapRoute[] = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/about/', changefreq: 'monthly', priority: 0.8 },
  { path: '/business/', changefreq: 'weekly', priority: 0.9 },
  { path: '/contact/', changefreq: 'monthly', priority: 0.8 },
  { path: '/legal/', changefreq: 'monthly', priority: 0.7 }
];

export function GET() {
  const baseUrl = constants.siteUrl.replace(/\/$/, '');
  const generatedAt = new Date().toISOString();

  const urlEntries = constants.indexingAllowed
    ? routes
        .map(
          (route) => `  <url>\n    <loc>${baseUrl}${route.path}</loc>\n    <lastmod>${generatedAt}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority.toFixed(1)}</priority>\n  </url>`
        )
        .join('\n')
    : '';

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;

  return new Response(body, {
    headers: {
      'content-type': 'application/xml; charset=utf-8'
    }
  });
}
