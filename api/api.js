let protocol = "http://"
const base = process.env.NEXT_PUBLIC_SERVER_URL
const tls = process.env.NEXT_PUBLIC_SERVER_TLS

export const fullUrl = protocol + base
