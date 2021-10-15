import {getHost} from '../lib/helpers'
import {getAllPosts} from '../lib/content'

const Sitemap = () => {}

export const getServerSideProps = async ({ res }) => {
  const staticPages = ['uses', 'blog']
  const excludedPages = ['typography']
  
  const slugs = getAllPosts(['slug'])
    .filter(page => !excludedPages.includes(page.slug)) 
    .map(post => `blog/${post.slug}`)

  const pages = [
    ...staticPages,
    ...slugs
  ].map(route => `${getHost()}/${route}`)

  const sitemap = `<?xml version='1.0' encoding='UTF-8'?>
    <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
      ${pages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}


export default Sitemap
