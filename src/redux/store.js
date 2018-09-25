import {createStore,combineReducers,applyMiddleware} from 'redux';
import * as app from './reducers/appReducer';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({...app}),
    applyMiddleware(thunk)
);
export default store;