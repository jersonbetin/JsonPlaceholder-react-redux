import configureStoreDev from './configureStore.dev'
import configureStoreProd from './configureStore.prod'

if(process.env.NODE_ENV === 'production'){
  module.exports = configureStoreProd()
}else{
  module.exports = configureStoreDev()
}
