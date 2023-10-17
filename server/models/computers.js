import pool from '../config/database.js';

const findAll = () => {
    const sqlQuery = 'SELECT * FROM computers';
    return pool.query(sqlQuery)
}

const findOne = (id) => {
    if (!id) {
        throw new Error('Missing id');
    }
    const sqlQuery = 'SELECT * FROM computers WHERE id = $1';
    return pool.query(sqlQuery, [id])
}

const create = (computer) => {
    const { price, cpu, gpu, ram, leds, storage, name, motherboard } = computer;
    
    console.log(computer)

    const sqlQuery = 'INSERT INTO computers (cpu, gpu, ram, leds, storage, name, price, motherboard) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    return pool.query(sqlQuery, [cpu, gpu, ram, leds, storage, name, price, motherboard])
}

const update = (id, details) => {

    const { cpu, gpu, ram, leds, storage, name, price, motherboard } = details;

    const sqlQuery = 'UPDATE computers SET cpu = $2, gpu = $3, ram = $4, leds = $5, storage = $6, name = $7, price = $8, motherboard = $9 WHERE id = $1 RETURNING *';
    return pool.query(sqlQuery, [id, cpu, gpu, ram, leds, storage, name, price, motherboard])
}

const remove = (id) => {
    if (!id) {
        throw new Error('Missing id');
    }
    const sqlQuery = 'DELETE FROM computers WHERE id = $1 RETURNING *';
    return pool.query(sqlQuery, [id])
}

export default {
    findAll,
    findOne,
    create,
    update,
    delete: remove
}