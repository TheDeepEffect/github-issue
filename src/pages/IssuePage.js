import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {history} from "./../config/routes"
import { getComments } from '../services'
import { IssuePageContainer } from '../container/IssuePageContainer'

export const IssuePage=()=>{
    const {currentIssue}=useSelector(state=>state)
    const {id} = currentIssue


    return (
        <div >
            <IssuePageContainer/>
        </div>
    )
}