import { request } from '../utilities/api.js';

const computersURL = '/api/computers';
const partsURL = '/api/parts';

const getAllComputers = () => request('GET', computersURL);
const getComputersById = (id) => request('GET', `${computersURL}/${id}`);

const createComputer = (details) => request('POST', computersURL, details);
const updateComputer = (details) => request('PATCH', `${computersURL}/${details.id}`, details);
const deleteComputer = (id) => request('DELETE', `${computersURL}/${id}`);

const getPartsByType = (type) => request('GET', `${partsURL}/${type}`);

// API URL patterns
// '/parts/:type'
// '/computers'
// '/computers/:id'
// '/computers'
// '/computers/:id'
// '/computers/:id'

export default {
    getAllComputers,
    getComputersById,
    createComputer,
    updateComputer,
    deleteComputer,
    getPartsByType
};
