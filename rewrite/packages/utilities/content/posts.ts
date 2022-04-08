import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { pageType } from '../types'
import { slugify } from '../helpers'

const postsDirectory = join(process.cwd(), 'data', 'blog')
const contentDirectory = join(process.cwd(), 'data', 'content')

export function getSlugs(): string[] {
  const files = fs.readdirSync(postsDirectory)

  if (
    process.env.NODE_ENV === 'production' &&
    files.includes('typography.md')
  ) {
    const index = files.indexOf('typography.md')
    files.splice(index, 1)
  }

  return files
}

export function getContentBySlug(
  slug: string,
  fields: string[] = [],
  type?: pageType
): Record<PropertyKey, unknown> {
  let dataDirectory: string

  if (type === 'content') {
    dataDirectory = contentDirectory
  } else {
    dataDirectory = postsDirectory
  }

  const realSlug = slug.replace(/\.mdx?$/, '')
  const fullPath = join(dataDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}
  fields.forEach(field => {
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

export function getAllPosts(fields: string[] = []): Article[] {
  const slugs = getSlugs()

  // TODO Refactor this for total order
  const posts = slugs
    .map(slug => getContentBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1')) // Keep total order in mind

  return posts
}
