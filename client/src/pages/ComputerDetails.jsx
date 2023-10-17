import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import API from '../services/computerapi';

const ComputerDetails = ({computer}) => {

    const handleOnClick = (event) => {
        event.preventDefault()
        window.location.href = `/edit/${computer.id}`
        console.log("Edit button clicked")
    }


    return (    
        <>
            <h1 className="computer-name">{computer.name}</h1>
            <div className="computer-details">
                <h2>CPU: {computer.cpu}</h2>
                <h2>Motherboard: {computer.motherboard}</h2>
                <h2>GPU: {computer.gpu}</h2>
                <h2>RAM: {computer.ram}</h2>
                <h2>Storage: {computer.storage}</h2>
                <h2>Price: {computer.price}</h2>
            </div>
            <button onClick={handleOnClick}>Edit 📝</button>
            <button onClick={() => API.deleteComputer(computer.id)}>Delete ❌</button>
        </>
    )
}

export default ComputerDetails