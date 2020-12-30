// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import UsernameReducer from './reducers/username_reducer';
import ChannelReducer from './reducers/channel_reducer';
import MessageReducer from './reducers/message_reducer';
import selectChannelReducer from './reducers/select_channel_reducer';

// State and reducers
const reducers = combineReducers({
  username: UsernameReducer,
  channel: ChannelReducer,
  messages: MessageReducer,
  selectedChannel: selectChannelReducer
});

const initialState = {
  username: prompt("Whats your username?") || `Anonymous${Math.floor(10 + (Math.random() * 90))}`,
  channel: ['general', 'react', 'rio de janeiro'],
  selectedChannel: 'general'
};

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
