import React from 'react'
import { history } from '../config/routes'
import { routes } from '../config/routes_config'


export const PageNotFound=()=>{
    return(
        <div>Oops wrong page...
            <button onClick={()=>history.push(routes.home.path)}  >Go Back to Home</button>
        </div>
    )
}