import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import API from '../services/computerapi';

const CreateComputer = () => {
    const [CPUModal, setCPUModal] = useState(false);
    const [GPUModal, setGPUModal] = useState(false);
    const [MotherboardModal, setMotherboardModal] = useState(false);
    const [RAMModal, setRAMModel] = useState(false);
    const [StorageModal, setStorageModal] = useState(false);

    const [cpus, setCPUs] = useState([]);
    const [gpus, setGPUs] = useState([]);
    const [motherboards, setMotherboards] = useState([]);
    const [rams, setRAMs] = useState([]);
    const [storages, setStorages] = useState([]);

    const [computer, setComputer] = useState({
        name: '',
        price: '',
        cpu: {},
        gpu: {},
        motherboard: {},
        ram: {},
        storage: {},
        leds: false
    });

    useEffect(() => {
        (async () => {
            try {
                const data1 = await API.getPartsByType('cpus')
                setCPUs(data1)
                const data2 = await API.getPartsByType('gpus')
                setGPUs(data2)
                const data3 = await API.getPartsByType('motherboards')
                setMotherboards(data3)
                const data4 = await API.getPartsByType('rams')
                setRAMs(data4)
                const data5 = await API.getPartsByType('storage')
                setStorages(data5)
            } catch (error) {
                throw error
            }
        }) ()
    }, []);

    useEffect(() => {
        updatePrice()
    }, [computer.cpu, computer.gpu, computer.motherboard, computer.ram, computer.storage])



    const handleButtonClick = (partName, part) => {
        switch (partName) {
            case 'cpu':
                setComputer(prevComputer => ({
                    ...prevComputer, 
                    cpu: part
                }));
                setCPUModal(!CPUModal);
                break;
            case 'gpu':
                setComputer(prevComputer => ({
                    ...prevComputer,
                    gpu: part
                }))
                setGPUModal(!GPUModal);
                break;
            case 'motherboard':
                setComputer(prevComputer => ({
                    ...prevComputer,
                    motherboard: part
                }))
                setMotherboardModal(!MotherboardModal);
                break;
            case 'ram':
                setComputer(prevComputer => ({
                    ...prevComputer,
                    ram: part
                }))
                setRAMModel(!RAMModal);
                break;
            case 'storage':
                setComputer(prevComputer => ({
                    ...prevComputer,
                    storage: part
                }))
                setStorageModal(!StorageModal);
                break;
            default:
                throw error;
                break;
        }
    }

    const updatePrice = () => {
        setComputer(prevComputer => ({
            ...prevComputer,
            price: String(parseFloat((computer.cpu.price || 0)) + parseFloat((computer.gpu.price || 0)) + parseFloat((computer.motherboard.price || 0)) + parseFloat((computer.ram.price || 0)) + parseFloat((computer.storage.price || 0)))
        }))
    }

    const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
            },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            color: 'black'
        }
    }

    const handleNameChange = (event) => {
        setComputer(prevComputer => ({
            ...prevComputer,
            name: event.target.value
        }))
    }

    const submitComputer = async (computer) => {
        try {
            let computerValue = {
                name: computer.name,
                price: computer.price,
                cpu: computer.cpu.name,
                gpu: computer.gpu.name,
                motherboard: computer.motherboard.name,
                ram: computer.ram.name,
                storage: computer.storage.name,
                leds: computer.leds
            }
            console.log(computer)
            await API.createComputer(computerValue)
        } catch (error) {
            throw error
        }
    }

  return (
    <>
    <nav>
      <ul>
        <li>
            <div className="input-group">
                <input
                type="text"
                className="input"
                placeholder="Enter the name..."
                value={computer.name} // Bind the input value to the component's state
                onChange={handleNameChange} // Call the handleNameChange function on input change
                />
            </div>
        </li>
        <li>
            <span role="button" onClick={() => setCPUModal(!CPUModal)}>
                CPUs&nbsp;<i class="fa-solid fa-microchip" />
            </span>
            <Modal isOpen={CPUModal}
                   onRequestClose={() => setCPUModal(false)}
                   style={customStyles}
                   contentLabel="Example Modal"
            >
                <h2 className="title">Choose Your CPU</h2>
                {cpus && cpus.map((cpu, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick('cpu', cpu)}
                    >
                        {cpu.name}
                    </button>
                ))}

                <button onClick={() => setCPUModal(!CPUModal)}><i class="fa-solid fa-left-long"></i></button>
            </Modal>
        </li>
        <li>
            <span role="button" onClick={() => setGPUModal(!GPUModal)}>
                GPUs&nbsp;<i class="fa-solid fa-microchip" />
            </span>
            <Modal isOpen={GPUModal} 
                   onRequestClose={() => setGPUModal(false)}
                   style={customStyles}
                   contentLabel="Example Modal"
                   >
                <h2 className="title">Choose Your GPU</h2>
                {gpus && gpus.map((gpu, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick('gpu', gpu)}
                    >
                        {gpu.name}
                    </button>
                ))}
                <button onClick={() => setGPUModal(!GPUModal)}><i class="fa-solid fa-left-long"></i></button>
            </Modal>
        </li>
        <li>
          <span role="button" onClick={() => setMotherboardModal(!MotherboardModal)}>
            Motherboards&nbsp;<i class="fa-solid fa-chess-board"></i>
          </span>
          <Modal
            isOpen={MotherboardModal}
            onRequestClose={() => setMotherboardModal(false)}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 className="title">Choose Your Motherboard</h2>
            {motherboards && motherboards.map((motherboard, index) => (
                <button
                    key={index}
                    onClick={() => handleButtonClick('motherboard', motherboard)}
                >
                    {motherboard.name}
                </button>
            ))}
            <button onClick={() => setMotherboardModal(!MotherboardModal)}><i class="fa-solid fa-left-long"></i></button>
          </Modal>
        </li>
        <li>
          <span role="button" onClick={() => setRAMModel(!RAMModal)}>
            RAMs&nbsp;<i class="fa-solid fa-memory"></i>
          </span>
          <Modal isOpen={RAMModal} 
                 onRequestClose={() => setRAMModel(false)}
                 style={customStyles}
                 contentLabel="Example Modal"
                 >
            <h2 className="title">Choose Your Memory</h2>
            {rams && rams.map((ram, index) => (
                <button
                    key={index}
                    onClick={() => handleButtonClick('ram', ram)}
                >
                    {ram.name}
                </button>
            ))}
            <button onClick={() => setRAMModel(!RAMModal)}><i class="fa-solid fa-left-long"></i></button>
          </Modal>
        </li>
        <li>
          <span role="button" onClick={() => setStorageModal(!StorageModal)}>
            Storages&nbsp;<i class="fa-solid fa-hard-drive"></i>
          </span>
          <Modal
            isOpen={StorageModal}
            onRequestClose={() => setStorageModal(false)}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 className="title">Choose Your Storage</h2>
            {storages && storages.map((storage, index) => (
                <button
                    key={index}
                    onClick={() => handleButtonClick('storage', storage)}
                >
                    {storage.name}
                </button>
            ))}
            <button onClick={() => setStorageModal(!StorageModal)}><i class="fa-solid fa-left-long"></i></button>
          </Modal>
        </li>
        <li>
            <span role="button" onClick={() => setComputer(prevComputer => ({
                ...prevComputer,
                leds: !prevComputer.leds
            }))}>
                LEDs&nbsp;<i class="fa-solid fa-lightbulb"></i>
            </span>
        </li>
        <li>
            <button onClick={() => {submitComputer(computer)}}>Submit</button>
        </li>
      </ul>
    </nav>
    <div className="computer">
        <h1 style={{ marginBottom: '1rem' }}>{computer.name}</h1>
        <h3>CPU: {computer.cpu.name}</h3>
        <h3>GPU: {computer.gpu.name}</h3>
        <h3>Motherboard: {computer.motherboard.name}</h3>
        <h3>RAM: {computer.ram.name}</h3>
        <h3>Storage: {computer.storage.name}</h3>
        <h3>LEDs: {computer.leds ? 'Yes' : 'No'}</h3>
        <h2>Price: ${computer.price}</h2>
    </div>
    </>
  );
}

export default CreateComputer;

