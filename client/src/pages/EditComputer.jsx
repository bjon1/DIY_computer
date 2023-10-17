import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import API from '../services/computerapi';
import { useParams } from 'react-router-dom'

const EditComputer = () => {
    
    let { id } = useParams()
    const [computer, setComputer] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const data = await API.getComputersById(id)
                setComputer(data)
            } catch (error) {
                throw error
            }
        }) ()
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setComputer((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const submitComputer = async () => {
        try {
            console.log(computer)
            const data = await API.updateComputer(computer)
        } catch (error) {
            throw error
        }
    }

    
    return (
        <div className="computer-edit">
            <h1 className="computer-name">{computer.name}</h1>
            <div className="computer-details">
                <input
                    type="text"
                    name="name"
                    value={computer.name}
                    onChange={handleChange}
                    placeholder={computer.name}
                />
                <input
                    type="text"
                    name="cpu"
                    value={computer.cpu}
                    onChange={handleChange}
                    placeholder={computer.cpu}
                />
                <input
                    type="text"
                    name="motherboard"
                    value={computer.motherboard}
                    onChange={handleChange}
                    placeholder={computer.motherboard}
                />
                <input
                    type="text"
                    name="gpu"
                    value={computer.gpu}
                    onChange={handleChange}
                    placeholder={computer.gpu}
                />
                <input
                    type="text"
                    name="ram"
                    value={computer.ram}
                    onChange={handleChange}
                    placeholder={computer.ram}
                />
                <input
                    type="text"
                    name="storage"
                    value={computer.storage}
                    onChange={handleChange}
                    placeholder={computer.storage}
                />
                <input
                    type="text"
                    name="price"
                    value={computer.price}
                    onChange={handleChange}
                    placeholder={computer.price}
                />
                <button onClick={submitComputer}>Submit</button>
            </div>
        </div>
    )
}

export default EditComputer