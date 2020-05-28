import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useMount } from 'react-use'
import { loadIssues } from '../redux/actions'
import { history } from '../config/routes'
import { IssueListContainer } from '../container/IssueListContainer'
import { routes } from '../config/routes_config'
import { PaginationComponent } from '../components/PaginationComponent'


export const IssueListPage=()=>{
    const {currentPage,issues,loading,errors}=useSelector(state=>state)
    const dispatch= useDispatch()
    
    useEffect(()=>{
        dispatch(loadIssues(`repos/facebook/react/issues?page=${currentPage}`))
        if(history.location.pathname!==routes.issues.path_string({page:currentPage})){
            history.push(routes.issues.path_string({page:currentPage}))
        }
    },[currentPage])
    
    if(errors.length){
   return  <div className="issue-list-page"  >
   {errors.map(err=><p>{err.message}</p>)}
</div>
    }
    

    return (
    <div className="issue-list-page"  >
        {loading?"Loading...":
            <IssueListContainer/>
        }
        {/* <button onClick={()=>onNext()}>next</button> */}
        <div className="paginate" >
        <PaginationComponent/>
        </div>
    </div>
    )
}