import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from '../reducers/index'

export default function configureStore(initialState) {
  const logger = createLogger()
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, logger)
    )
  )
}
