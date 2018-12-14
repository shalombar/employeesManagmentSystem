import { createStore, applyMiddleware } from 'redux';
import middleware from './middleware/general.mid'
import rootReducer from './reducers/rootReducer';
export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        applyMiddleware(middleware)
    );
}