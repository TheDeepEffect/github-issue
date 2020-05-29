import React,{useEffect} from 'react'
import { Issue } from '../components/Issue'
import { CommentsContainer } from './CommentsContainer'
import { useSelector } from 'react-redux'
import { history } from '../config/routes'
import { routes } from '../config/routes_config'


export const IssuePageContainer=()=>{
    const {currentIssue}=useSelector(state=>state)
    const {comments_url}= currentIssue
    // console.log(comments_url)
    if(Object.keys(currentIssue).length){
        return <div  >
        <div className="issues">
        <Issue issue={currentIssue} />
        </div>
        COMMENTS:
        <div className="comments"  >
        <CommentsContainer comments_url={comments_url}  />
        </div>
    </div>
    }
    else{
        history.push(routes.home.path)
        return <></>
    }
}