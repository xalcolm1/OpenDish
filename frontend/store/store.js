import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import { logger } from 'redux-logger';

let middleware = [thunk];
process.env.NODE_ENV !== 'production' ? middleware.push(logger) : false;

const configureStore = (preloadedState) =>  createStore(
    rootReducer, preloadedState, applyMiddleware(...middleware)
);

export default configureStore;