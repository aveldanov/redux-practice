import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import counterReducer from './store/reducers/Counter';
import resultReducer from './store/reducers/Result';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
})

//Middleware
const logger = store => {
  reutrn next
}

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
