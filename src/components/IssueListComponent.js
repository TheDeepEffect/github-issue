import React from 'react'
import { Row, ListGroup } from 'react-bootstrap'
import { Label } from './Label'
import { history } from '../config/routes'
import { routes } from '../config/routes_config'
import { useDispatch } from 'react-redux'
import { setCurrentIssue } from '../redux/actions/currentIssue'


export const IssueListComponent=(issue)=>{
    const {issue:{title,labels,id,body}}=issue
    const dispatch = useDispatch()
    const onIssueClicked=()=>{
        dispatch(setCurrentIssue(issue))
        history.push(routes.issue.path_string({issue_id:id}))
    }
return (
        <ListGroup.Item
            as="li"
            onClick={()=>onIssueClicked()}
        >
        {title} 
        {labels.map(label=><Label key={label.id}  label={label}  />)}
        </ListGroup.Item>
)
}