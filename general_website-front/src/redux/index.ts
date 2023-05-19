import { legacy_createStore as createStore, combineReducers, Store, compose, applyMiddleware } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import auth from './modules/auth/reducer'

// 拆分 reducer
const reducers = combineReducers({
  auth
})

// redux 持久化配置
const persistConfig = {
  key: 'redux-state',
  storage: storage
}
const persistReducerConfig = persistReducer(persistConfig, reducers)

// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise)

// 创建 store
const store: Store = createStore(persistReducerConfig, composeEnhancers(middleWares))

// 创建持久化 store
const persistor = persistStore(store)

export { store, persistor }
