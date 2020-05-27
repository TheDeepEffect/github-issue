import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useMount } from 'react-use'
import { loadIssues } from '../redux/actions'
import { history } from '../config/routes'


export const IssueListPage=()=>{
    const {currentPage,issues,loading}=useSelector(state=>state)
    const dispatch= useDispatch()

    useMount(()=>{
        dispatch(loadIssues(`repos/facebook/react/issues?page=${currentPage}`))
    })
    // console.log(history.location.pathname.charAt(history.location.pathname.length-1))
    console.log(history.listen())
    console.log(currentPage);
    

    console.log(issues)
    return (
    <div>{loading?"Loading...":"List component"}</div>
    )
}