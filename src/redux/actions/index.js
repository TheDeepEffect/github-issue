import {getIssues} from "./../../services/index"
import {setCurrentPageAction} from "./currentPage"
import {isuueLoadingAction, issueLoadSuccessAction,isuueLoadErrorAction} from "./issues"
import {setHeader} from "./header"
const loadIssues=(subUrl)=>dispatch=>{
    dispatch({...isuueLoadingAction()});
    getIssues(subUrl).then(res=>res)
    .then(
        data=>dispatch({...issueLoadSuccessAction(data)}),
        error=>dispatch({...isuueLoadErrorAction(error)})
    )
}


export {setCurrentPageAction,loadIssues,setHeader}
