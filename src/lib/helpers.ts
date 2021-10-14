export const getProtocol = () => {
  let protocol = 'https'

  if (process.env.NODE_ENV === 'development') {
    protocol = 'http'
  }

  return protocol
}

export const getProductionHost = () => {
  return process.env.VERCEL_URL
}

export const getHost = () => {
  const host = getProductionHost()
  const protocol = getProtocol()

  return `${protocol}://${host}`
}

