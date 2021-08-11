import {gql} from '@apollo/client'
import {FooterFragments, HomePageFragment} from '@fragments'

export const rootQuery = gql`
  query rootQuery  {
    ...HomePage
    ...FooterLinks
  }
  ${HomePageFragment.content}
  ${FooterFragments.content}
`
