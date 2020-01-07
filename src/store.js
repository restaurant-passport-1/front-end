import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store =  createStore(
    Reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;