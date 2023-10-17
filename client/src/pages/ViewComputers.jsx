import React from 'react'
import '../App.css'
import API from '../services/computerapi';
import { useState, useEffect } from 'react';
import ComputerDetails from './ComputerDetails';

const ViewComputers = () => {

    const [computers, setComputers] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = await API.getAllComputers()
                setComputers(data)
            } catch (error) {
                throw error
            }
        }) ()
    }, [])

    
    return (
        <div className="computer-container">
            {computers &&
                computers.map((computer) => (
                <div key={computer.id} className="computer-card">
                    <ComputerDetails computer={computer} />
                </div>
            ))}
        </div>

    )
}

export default ViewComputers