import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { get } from '../services'
import {routes} from "./../config/routes_config"
import {history} from "./../config/routes"
import {setCurrentPageAction} from "./../redux/actions"

export const PaginationComponent=({pages})=>{
    const {currentPage,loading}=useSelector(state=>state)
    const dispatch=useDispatch()
    const [items, setItems] = useState([])

        // console.log(pages,currentPage)

        useEffect(()=>{
            // console.log("paged")
           setItems(state=>{
               const items=[]
               for(let i =1 ; i<=pages;i++){
                items.push(<Pagination.Item key={i} active={currentPage===i}  name={i} disabled={loading} 
                    onClick={e=>onPageSelect(e)}
                >
                    {i}
                </Pagination.Item>)
            }

            return [...items]
           })
        },[pages,loading,currentPage])

        // console.log(items)
    const onPageSelect=(e)=>{
        const {target:{name}}=e
        dispatch(setCurrentPageAction(name));
        history.push(routes.issues.path_string({page:name}));
    }


   

return(
        <Pagination >
           {items}
        </Pagination>
    )
}