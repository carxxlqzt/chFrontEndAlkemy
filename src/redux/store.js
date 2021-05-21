import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import getPosts from './configReducers'


const rootReducer= combineReducers({
    allPosts:getPosts
})
const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose;
export default function generateStore(){
    const store= createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store
}