import { getEnv } from '@ruguoapp/jkfe-env'

const env = getEnv()
const isInJike = env.app.isJike

const IS_DEV = process.env.NODE_ENV === 'development'

export const IS_BETA =
  window.location.hostname === 'localhost' ||
  window.location.hostname.includes('-beta')

export const IN_JIKE_OR_DEV_MODE = isInJike || IS_DEV
