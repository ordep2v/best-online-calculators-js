import React from 'react'

export default function Button(props) {
    

    return (
        <div className='roman-button'>
            <button type='button' onClick={props.onClick}>{props.number}</button>
        </div>
    )
}
