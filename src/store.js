import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunkMiddleware,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function store(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
