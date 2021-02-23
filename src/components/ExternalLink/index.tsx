export const ExternalLink = (props): React.ReactNode => {
  if (props.href.includes('koenverburg.dev') || props.href[0] === '/') {
    return <a href={props.href}>{props.children}</a>
  }

  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}
