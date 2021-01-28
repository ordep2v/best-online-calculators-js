import React from 'react'
export default function Display(props) {
    

    return (
        <div className='display-content'>
            {props.children}
        </div>
    )
}
