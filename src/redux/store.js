import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import compareProductsReducer from './compareRedux';
import viewportReducer from './viewportRedux';
import postsReducer from './postsRedux ';
import brandsReducer from './brandsRedux';
import galleryReducer from './galleryRedux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  compare: compareProductsReducer,
  viewport: viewportReducer,
  brands: brandsReducer,
  gallery: galleryReducer,
  posts: postsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, combinedReducers);

// create store
const store = createStore(
  persistedReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
export const persistor = persistStore(store);
