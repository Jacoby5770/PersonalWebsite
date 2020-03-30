import React from 'react'

export const Button = (props) => {
    return (
        <a href="portfolio" onClick={props.handleClick}>
            {props.text}
        </a>
    )
}