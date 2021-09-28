import {preToCodeBlock} from 'mdx-utils'
import {Code, ExternalLink} from '@components'

export const MarkdownComponents = {
  // eslint-disable-next-line react/display-name
  a: (props: HTMLAnchorElement): JSX.Element => <ExternalLink {...props} />,
  pre: (preProps: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLPreElement> & React.HTMLAttributes<HTMLPreElement>): React.ReactNode | HTMLPreElement => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
}
