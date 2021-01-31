import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {composeWithDevTools} from "redux-devtools-extension/index";


export default function configureStore(preloadedState = {}) {
    return createStore(
        reducers, preloadedState, composeWithDevTools(applyMiddleware(thunk))
    )
}