import constants from '../data/constants.json' assert { type: 'json' };

export function GET() {
  if (!constants.indexingAllowed) {
    const body = `User-agent: *\nDisallow: /\n`;
    return new Response(body, {
      headers: {
        'content-type': 'text/plain; charset=utf-8'
      }
    });
  }

  const body = `User-agent: *\nAllow: /\n\nSitemap: ${constants.siteUrl}/sitemap-index.xml\n`;
  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8'
    }
  });
}
