import React from 'react'
// import { getIssues } from '../services'
// import {useMount} from "react-use"
import {history} from "./../config/routes"
import { routes as routes_config } from '../config/routes_config'

export const Home = ()=>{

    return (
        <div>
            <button
            onClick={()=>{history.push(routes_config.issues.path_string({page:'2'}))}}>
                Load issues...</button>
        </div>
    )
}
