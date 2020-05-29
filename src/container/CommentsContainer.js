import React, { useEffect, useState } from 'react'
import { Comment } from '../components/Comment'
import { getComments } from '../services'
import { routes } from '../config/routes_config'
import { history } from '../config/routes'

export const CommentsContainer=({comments_url})=>{
    const [comments, setComments] = useState([])


    useEffect(()=>{
        let isSubscribed = true
        if(comments_url )
        {
            if(!comments.length){
                getComments(comments_url).then(res=>isSubscribed&& setComments(res.data))
            }
        }
        else{
            history.push("/error")
        }
        
         return () => isSubscribed = false
    },[comments])
    
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id}  comment={comment}  />)}
        </div>
    )
}