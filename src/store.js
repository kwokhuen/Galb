import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'
import appConfig from 'configs'

console.log('appConfig', appConfig)

const composeEnhancers = (appConfig.env === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
let middlewares = [thunkMiddleware]

if (appConfig.env !== 'production') {
  middlewares = [(require('redux-immutable-state-invariant').default()), ...middlewares]
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

if (global.reduxNativeDevTools) {
  global.reduxNativeDevTools.updateStore(store)
}

export default store
