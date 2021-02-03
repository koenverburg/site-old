export interface IArticle {
  title: string
  subTitle?: string
  description: string
  kicker: string
  series?: string
  tags?: string[]
  slug: string
  date?: Date
  canonical_url?: string
}
