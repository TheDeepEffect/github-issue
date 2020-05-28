import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {history} from "./../config/routes"
import { routes } from '../config/routes_config'
import { getComments } from '../services'

export const IssuePage=()=>{
    const {currentIssue:{comments_url,id,title,body}}=useSelector(state=>state)

    useEffect(() => {
        if(comments_url){
           getComments()
        }else{
            history.push("/error")
        }
        
    })
    return (
        <div >
            Issue page...
        </div>
    )
}