import React from 'react'
import { Card } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'


export const Comment = ({comment})=>{

    console.log(comment)
    const {id,body,user:{login}}=comment
    return (
        <Card className="text-left"  >
        <Card.Header>{login} Commented</Card.Header>
        <Card.Body>        
        <ReactMarkdown source={body}/>
        </Card.Body>
    <Card.Footer>{id}</Card.Footer>
    </Card>
    )
}