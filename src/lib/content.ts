import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'
import {Article} from '@types'

const postsDirectory = join(process.cwd(), 'data', 'blog')
const contentDirectory = join(process.cwd(), 'data', 'content')

type pageType = 'blog' | 'content'

export function getSlugs(): string[] {
  const files = fs.readdirSync(postsDirectory)

  if (process.env.NODE_ENV === 'production' && files.includes('typography.md')) {
    const index = files.indexOf('typography.md')
    files.splice(index, 1)
  }

  return files
}

const slugify = (title: string): string => {
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

export function getContentBySlug(slug: string, fields: string[] = [], type?: pageType): Article {
  let dataDirectory: string
  if (type === 'content') {
    dataDirectory = contentDirectory
  } else {
   dataDirectory = postsDirectory
  }

  const realSlug = slug.replace(/\.mdx?$/, '')
  const fullPath = join(dataDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)

  const items = {}
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

  return items as Article
}

export function getAllPosts(fields: string[] = []): Article[] {
  const slugs = getSlugs()
  const posts = slugs.map(slug => getContentBySlug(slug, fields))
    // .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

  return posts
}
