import {gql} from '@apollo/client'

type Props = {
  contentPage: any
}

const Index = (props: Props): JSX.Element => {
  console.log(props.contentPage)
  return (
    <section className="section--hero">
      <h1 className="hero">
        Koen is a&nbsp;
        <span>Developer</span>
      </h1>
    </section>
  )
}


export const HomePageFragment = {
  content: gql`
    fragment HomePage on Query {
      contentPage(where: {id: "ckrjcvgxc33x30a553d8gcikp"}) {
        id
        slug
        title
        description {
          markdown
        }
        sections {
          id
          title
          description {
            markdown
          }
          projects {
            ... on Project {
              id
              link
              projectName
              tags {
                slug
                name
                id
              }
            }
          }
        }
      }
    }
  `,
}

export default Index
