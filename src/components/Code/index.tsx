import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/palenight'
import styles from './code.module.scss'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Code = ({codeString, language, _metastring, ...props}): React.ReactNode => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
      {...props}
    >
      {({className, style, tokens, getTokenProps}) => (
        <div className={styles.reactHighlight} data-language={language}>
          <pre className={className} style={style}>
            {tokens.map(line => {
              return (
                <div>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} className={styles.token} />
                  ))}
                </div>
              )
            })}
          </pre>
        </div>
      )}
    </Highlight>
  )
}
