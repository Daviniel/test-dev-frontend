// store.js
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
// import rootReducer from './reducers'; // Importe seu reducer principal aqui

// Configuração da extensão Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Criação da store com middleware redux-thunk
const store = createStore(
  // rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;