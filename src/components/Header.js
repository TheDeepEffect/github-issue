import React from 'react'
import {useSelector} from "react-redux"

export const Header = ()=>{

    const {header} =useSelector(state=>state)
    return <div className="header"  >
        {header}
    </div>
}