import {preToCodeBlock} from 'mdx-utils'
import {Code, ExternalLink, Image} from '@components'

export const MarkdownComponents = {
  img: (props) => <Image {...props} />,
  a: (props) => <ExternalLink {...props} />,
  pre: (preProps: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLPreElement> & React.HTMLAttributes<HTMLPreElement>): React.ReactNode | HTMLPreElement => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
}
