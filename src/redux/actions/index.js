import {getIssues} from "./../../services/index"

import {isuueLoadingAction, issueLoadSuccessAction,isuueLoadErrorAction} from "./issues"

export const loadIssues=(subUrl)=>dispatch=>{
    dispatch({...isuueLoadingAction()});
    getIssues(subUrl).then(res=>res)
    .then(
        data=>dispatch({...issueLoadSuccessAction(data)}),
        error=>dispatch({...isuueLoadErrorAction(error)})
    )
}