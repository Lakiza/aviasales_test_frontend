import { 
    createStore, 
    applyMiddleware,
    combineReducers
} from 'redux'

import metricsReducer from './reducers/metrics'

const rootReducer = combineReducers({
    metrics: metricsReducer
});
const store = createStore(rootReducer);

export default store;