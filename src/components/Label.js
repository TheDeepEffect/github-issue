import React from 'react'

export const Label = ({label})=>{
    // console.log(label)

    return <span className="label"style={{backgroundColor:`#${label.color}`}} >
        {label.name}
    </span>
}