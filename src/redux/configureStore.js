import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import albums from './albums'
import playlist from './playlist'
import artists from './artists'



export const configureStore = () => {
  const store = createStore(
    combineReducers({ albums, artists, playlist }),
    applyMiddleware(thunk)
  )
  return store
}
