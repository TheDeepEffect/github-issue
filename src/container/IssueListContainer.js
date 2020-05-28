import React from 'react'
import {Row,Col, Container, ListGroup} from "react-bootstrap"
import { useSelector } from 'react-redux'
import { IssueListComponent } from '../components/IssueListComponent'



export const IssueListContainer = ()=>{
    const {issues,loading} = useSelector(state=>state)


    return (
            <ListGroup as="ul"  >
            {
                loading?"Loading...":issues.map(issue=>{
                    return <IssueListComponent
                        key={issue.id}
                        issue={issue }  />
                })
            }
            </ListGroup>
    )
}