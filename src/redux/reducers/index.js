
import {initialState} from "./../store";
import {LOAD_ISSUES_ERROR,LOAD_ISSUES_SUCCESS,LOAD_ISSUES_LOADING} from "./../actions/issues"

export const issueReducer=(state=initialState,action)=>{
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
                issues:[...state.issues,payload]
            }
            default:
                return state
    }
}