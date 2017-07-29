// import {combineReducers} from 'redux'
// import {reducer as dataReducer} from './data/reducer'
// import {reducer as scenesReducer} from './scenes/reducer'
import {USER_LOGOUT, APP_INIT} from './rootActions'
// import {intlReducer} from 'react-intl-redux'

// const appReducer = combineReducers({data: dataReducer, scene: scenesReducer})

const rootReducer = (state, action) => {
  switch (action.type) {
    case APP_INIT:
    case USER_LOGOUT:
//      state = {intl: state.intl, data: {ui: {appLocale: state.data.ui.appLocale}}}
      break
  }

  // return appReducer(state, action)
}

export default rootReducer
