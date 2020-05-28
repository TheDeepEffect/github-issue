import React from 'react'
import {history} from "./../config/routes"
import { routes as routes_config } from '../config/routes_config'
import { useSelector } from 'react-redux'


export const Home = ()=>{
    const {currentPage}= useSelector(state=>state)

    return (
        <div >
            <button
            onClick={()=>{history.push(routes_config.issues.path_string({page:currentPage}))}}>
                Load issues...</button>
        </div>
    )
}
