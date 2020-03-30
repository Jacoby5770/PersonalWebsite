import React from 'react'
import face from '../img/face.svg'

export const Sidebar = (props) => {
    return (
        <div>
            <div className='name'>
                <img src={face} alt="personal" height="100" width="100"></img>
                <h4>Jacoby Kang</h4>
                <p>Developer</p>
            </div>
            <div className='categories'>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Skills</p>
                <p>Education</p>
                <p>Experience</p>
                <p>Work</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
        </div>
    )
}