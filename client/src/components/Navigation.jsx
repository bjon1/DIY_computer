import React from 'react'
import '../App.css'
import '../css/Navigation.css'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><h1>DIY Computer 🖥️</h1></li>
            </ul>

            <ul>
                <li><a href='/' role='button'>Create  <i className="fa-solid fa-plus"></i></a></li>
                <li><a href='/custombuilds' role='button'>View Builds <i className="fa-solid fa-computer"></i></a></li>
            </ul>
            
        </nav>
    )
}

export default Navigation