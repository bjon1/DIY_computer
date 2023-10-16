import pool from '../config/database.js'

const findAll = (type) => {
    const sqlQuery = `SELECT * FROM ${type}`;
    return pool.query(sqlQuery)
}

export default {
    findAll,
    findById,
    create,
    update,
    delete: remove
}

