import React,{useEffect} from 'react'
import { Card } from 'react-bootstrap'
import ReactMarkdown from "react-markdown"


export const Issue=({issue})=>{
    const {id,title,body,user:{login}}=issue
    return <Card className="text-left"  >
        <Card.Header>Issue#{id}</Card.Header>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        
        <ReactMarkdown source={body}/>
        </Card.Body>
<Card.Footer>By {login}</Card.Footer>
    </Card>
}