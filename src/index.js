import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { AppContainer } from 'react-hot-loader'
import routes from './router'
import store from './store/configureStore'



render(
  <AppContainer>     
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)

/*if (module.hot){
  module.hot.accept('./router', () =>{
    console.log('entro')
    const newRouter = require('./router').default
    renderApp(newRouter)
  })
}*/
