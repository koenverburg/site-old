import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import styles from './code.module.scss'

export const Code = ({ codeString, language, metastring, ...props }) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
      {...props}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <div className={styles.reactHighlight} data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              return (
                <div>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} className={styles.token} />
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
