export const getProtocol = (): string => {
  let protocol = 'https'

  if (process.env.NODE_ENV === 'development') {
    protocol = 'http'
  }

  return protocol
}

export const getProductionHost = (): string =>
  process.env.VERCEL_URL

export const getHost = (): string => {
  const host = getProductionHost()
  const protocol = getProtocol()

  if (process.env.NODE_ENV === 'production') {
    return `${protocol}://${host}`
  }

  return 'http://localhost:3000'
}
