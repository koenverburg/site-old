const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

;(async () => {
  const pages = await globby([
    'src/pages/*.tsx',
    'data/blog/**/*.mdx',
    'data/blog/**/*.md',
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!data/blog/typography.md',
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('data/', '')
                  .replace('src/', '')
                  .replace('pages/', '')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                  .replace('.md', '');
                const route = path === 'index' ? '' : path;
                return `
                        <url>
                            <loc>${`https://koenverburg.dev/${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    parser: 'html',
  });

  fs.writeFileSync('./public/sitemap.xml', formatted);
})()
