import pool from '../config/database.js'


const findAll = () => {
    const sqlQuery = 'SELECT * FROM computers';
}

const findById = (id) => {
    const sqlQuery = 'SELECT * FROM computers WHERE id = $1';
}

const create = (details) => {
    const sqlQuery = 'INSERT INTO computers (name, price, description) VALUES ($1, $2, $3) RETURNING *';
}

const update = (id, details) => {
    const sqlQuery = 'UPDATE computers SET name = $1, price = $2, description = $3 WHERE id = $4 RETURNING *';
}

const remove = (id) => {
    const sqlQuery = 'DELETE FROM computers WHERE id = $1 RETURNING *';
}

export default {
    findAll,
    findById,
    create,
    update,
    delete: remove
}

