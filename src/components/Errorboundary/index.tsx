import React from 'react'

interface IProps {
  fallback: string
}

class ErrorBoundary extends React.Component<IProps> {
  state = {error: null}
  public componentDidCatch(error: unknown): void {
    this.setState({error})
  }
  public render(): React.ReactNode {
    const {children, fallback} = this.props
    const {error} = this.state
    if (error) {
      return React.createElement(fallback, {error})
    }
    return children
  }
}

export {ErrorBoundary}
