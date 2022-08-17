import React from 'react'
import './Titel.scss'

const Titel = ({first, secound}) => {
    return (
        <h1><span>{first}</span>{ secound }</h1>
    )
}

export default Titel