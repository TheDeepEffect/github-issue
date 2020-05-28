import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { get } from '../services'
import {routes} from "./../config/routes_config"
import {history} from "./../config/routes"
import {setCurrentPageAction} from "./../redux/actions"

export const PaginationComponent=()=>{
    const [totalIssues, setTotalIssues] = useState(0)
    const {currentPage,loading}=useSelector(state=>state)
    const dispatch=useDispatch()
    const items=[]

    
    const getTotalIssues=async()=>{
        const {data:{open_issues_count}}= await get({subUrl:'repos/facebook/react'})
        setTotalIssues(open_issues_count)
    }
    const onPageSelect=(e)=>{
        const {target:{name}}=e
        dispatch(setCurrentPageAction(name));
        history.push(routes.issues.path_string({page:name}));
    }
    useEffect(()=>{
        getTotalIssues()
    })

    for(let i =1 ; i<=Math.ceil(totalIssues/30);i++){
        items.push(<Pagination.Item key={i} active={currentPage===i}  name={i} disabled={loading} 
            onClick={e=>onPageSelect(e)}
        >
            {i}
        </Pagination.Item>)
    }

return(
        <Pagination >
           {items}
        </Pagination>
    )
}