import thunk from 'redux-thunk'
import { 
    createStore, 
    applyMiddleware,
    combineReducers
} from 'redux'

import metricsReducer from './reducers/metrics'

const rootReducer = combineReducers({
    metrics: metricsReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;