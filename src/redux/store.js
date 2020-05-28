import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {reducers} from "./reducers"
import {history} from "./../config/routes"

export const initialState={
    loading:true,
    errors:[],
    issues:[],
    currentPage:1,
    currentIssue:{},
    header:"Facebook/React issues"
}


export const configureStore = ()=>{
    const middleware=[thunk]
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers,initialState,composeEnhancers(applyMiddleware(...middleware))
         )

         return store;
}