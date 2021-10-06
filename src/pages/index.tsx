import css from 'classnames'
import React from 'react'
import {gql} from '@apollo/client'
import {Description, ProjectList} from '@components'
import {MDXRemote} from 'next-mdx-remote'
import {MarkdownComponents} from '@components'
import {serialize} from 'next-mdx-remote/serialize'
import {client} from 'lib/graphClient'
import type {MDXResult} from '@types'

type Props = {
  contentPage: any
  content: MDXResult
  seoDescription: string
}

const ProjectSection = ({section}) => {
  return (
    <div className={css('w-full max-w-none')}>
      <h3 className={css('font-medium py-5')}>{section.title}</h3>
      <ProjectList projects={section.projects} />
    </div>
  )
}

const Index = ({contentPage, content, seoDescription}: Props): JSX.Element | null => {
  return (
    <>
      <section>
        <Description
          title={'Home - Koen Verburg'}
          description={seoDescription}
        >
        </Description>
        <article className={css('prose w-full max-w-none')}>
          <h2>{contentPage.title}</h2>
          <MDXRemote
            components={MarkdownComponents}
            compiledSource={content.compiledSource}
          />
        </article>
      </section>
      {contentPage.sections && contentPage.sections.map(section =>
        <ProjectSection key={section.id} section={section} />
      )}
    </>
  )
}

const query = gql`
  query {
    contentPage(where: {id: "ckrjcvgxc33x30a553d8gcikp"}) {
      id
      slug
      title
      description {
        text
        raw
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
`

export async function getServerSideProps(): Promise<Record<PropertyKey, unknown>> {
  const {contentPage} = await client.request(query)

  const content = await serialize(contentPage.description.markdown ?? '')
  const seoDescription = contentPage.description.text.replaceAll('\\n', '')

  return {
    props: {
      content,
      seoDescription,
      contentPage,
    },
  }
}

export default Index
