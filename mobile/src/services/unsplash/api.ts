import Unsplash from 'unsplash-js'

import config from './config'

const unsplash = new Unsplash({
  accessKey: config.ACESSKEY,
  secret: config.SECRETKEY
})

export default unsplash
