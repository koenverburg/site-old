import {gql} from '@apollo/client'
import {FooterFragments} from '@fragments'

export const rootQuery = gql`
  query rootQuery  {
    ...FooterLinks
  }
  ${FooterFragments.links}
`
