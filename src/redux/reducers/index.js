
import {initialState} from "./../store";
import {LOAD_ISSUES_ERROR,LOAD_ISSUES_SUCCESS,LOAD_ISSUES_LOADING} from "./../actions/issues"
import { CURRENT_PAGE } from "../actions/currentPage";
import { SET_HEADER } from "../actions/header";
import { SET_CURRENT_ISSUE } from "../actions/currentIssue";

export const reducers=(state=initialState,action)=>{
    const {type,payload} =action
    switch(type){
        case LOAD_ISSUES_LOADING:
            return{
                ...state,
                loading:payload
            }
        case LOAD_ISSUES_ERROR:
            return {
                ...state,
                loading:false,
                errors:[...state.errors,payload],
            }
        case LOAD_ISSUES_SUCCESS:
            return{
                ...state,
                loading:false,
                errors:[],
                issues:[...payload.data]
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage:payload
            }
        case SET_HEADER:
            return {
                ...state,
                header:payload
            }
        case SET_CURRENT_ISSUE:
            return{
                ...state,
                currentIssue:{...payload.issue}
            }
            default:
                return state
    }
}