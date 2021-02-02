import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'data', 'blog')

export function getSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

const slugify = (title: string) => {
  const dictA = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const dictB = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const pattern = new RegExp(dictA.split('').join('|'), 'g')

  return title.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(pattern, c => dictB.charAt(dictA.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\\-]+/g, '') // Remove all non-word characters
    .replace(/\\-\\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export function getContentBySlug(slug: string, fields: string[] = []): Record<string, unknown> {
  const realSlug = slug.replace(/\.mdx?$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)

  const items = {}
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slugify(realSlug)
    }

    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

// enum Fields {
//   Kicker = 'kicker',
//   Title = 'title',
//   SubTitle = 'subTitle',
//   Slug = 'slug',
// }

export function getAllPosts(fields: string[] = []): Record<string, unknown>[] {
  const slugs = getSlugs()

  const posts = slugs.map(slug => getContentBySlug(slug, fields))
    // sort posts by date in descending order
    // .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
    //
  return posts
}
