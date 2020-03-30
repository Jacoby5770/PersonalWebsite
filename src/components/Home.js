import React from 'react'
import { Button } from '../components'


export const Home = (props) => {
    return (
        <div>
            I am a Developer
            <Button text="View Portfolio" onClick={props.handleClick}/>
        </div>
    )
}

