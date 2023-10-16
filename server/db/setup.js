import { create } from 'domain';
import pool from '../config/database.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data_cpus = fs.readFileSync(path.resolve(__dirname, 'cpus.json'), 'utf8')
const data_motherboards = fs.readFileSync(path.resolve(__dirname, 'motherboards.json'), 'utf8')
const data_rams = fs.readFileSync(path.resolve(__dirname, 'rams.json'), 'utf8')
const data_gpus = fs.readFileSync(path.resolve(__dirname, 'gpus.json'), 'utf8')
const data_storage = fs.readFileSync(path.resolve(__dirname, 'storage.json'), 'utf8')

const createCPUsTable = async () => {
  try {
    const createTableQuery = `
        DROP TABLE IF EXISTS cpus;
        CREATE TABLE IF NOT EXISTS cpus (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          chipset TEXT NOT NULL,
          power TEXT NOT NULL,
          price TEXT NOT NULL
        )
      `
    await pool.query(createTableQuery)
  } catch (error) {
    console.log(error)
  }
}

const createGPUsTable = async () => {
  try {
    const createTableQuery = `
        DROP TABLE IF EXISTS gpus;
        CREATE TABLE IF NOT EXISTS gpus (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          power TEXT NOT NULL,
          price TEXT NOT NULL
        )
      `
    await pool.query(createTableQuery)
  } catch (error) {
    console.log(error)
  }
}

const createMotherboardsTable = async () => {
  try {
    const createTableQuery = `
        DROP TABLE IF EXISTS motherboards;
        CREATE TABLE IF NOT EXISTS motherboards (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          chipset TEXT NOT NULL,
          ram_type TEXT NOT NULL,
          price TEXT NOT NULL
        )
      `
    await pool.query(createTableQuery)
  } catch (error) {
    console.log(error)
  }
}

const createRAMsTable = async () => {
  try {
    const createTableQuery = `
        DROP TABLE IF EXISTS rams;
        CREATE TABLE IF NOT EXISTS rams (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          type TEXT NOT NULL,
          capacity TEXT NOT NULL,
          price TEXT NOT NULL
        )
      `
    await pool.query(createTableQuery)
  } catch (error) {
    console.log(error)
  }
}

const createStorageTable = async () => {
  try {
    const createTableQuery = `
        DROP TABLE IF EXISTS storage;
        CREATE TABLE IF NOT EXISTS storage (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          price TEXT NOT NULL,
          space TEXT NOT NULL,
          type TEXT NOT NULL
        )
      `
    await pool.query(createTableQuery)
  } catch (error) {
    console.log(error)
  }
}

const insertCPUs = async () => {
  try {
    const insertQuery = `
        INSERT INTO cpus (name, chipset, power, price)
        VALUES ($1, $2, $3, $4)
      `
    const cpus = JSON.parse(data_cpus)
    for (let cpu of cpus) {
      const values = [
        cpu.name,
        cpu.chipset,
        cpu.power,
        cpu.price
      ]
      await pool.query(insertQuery, values)
      console.log(`✅ added ${cpu.name}`)
    }
  } catch (error) {
    console.log(error)
  }
}

const insertGPUs = async () => {
  try {
    const insertQuery = `
        INSERT INTO gpus (name, power, price)
        VALUES ($1, $2, $3)
      `
    const gpus = JSON.parse(data_gpus)
    for (let gpu of gpus) {
      const values = [
        gpu.name,
        gpu.power,
        gpu.price
      ]
      await pool.query(insertQuery, values)
      console.log(`✅ added ${gpu.name}`)
    }
  } catch (error) {
    console.log(error)
  }
}

const insertMotherboards = async () => {
  try {
    const insertQuery = `
        INSERT INTO motherboards (name, chipset, ram_type, price)
        VALUES ($1, $2, $3, $4)
      `
    const motherboards = JSON.parse(data_motherboards)
    for (let motherboard of motherboards) {
      const values = [
        motherboard.name,
        motherboard.chipset,
        motherboard.ram_type,
        motherboard.price
      ]
      await pool.query(insertQuery, values)
      console.log(`✅ added ${motherboard.name}`)
    }
  } catch (error) {
    console.log(error)
  }
}

const insertRAMs = async () => {
  try {
    const insertQuery = `
        INSERT INTO rams (name, type, capacity, price)
        VALUES ($1, $2, $3, $4)
      `
    const rams = JSON.parse(data_rams)
    for (let ram of rams) {
      const values = [
        ram.name,
        ram.type,
        ram.capacity,
        ram.price
      ]
      await pool.query(insertQuery, values)
      console.log(`✅ added ${ram.name}`)
    }
  } catch (error) {
    console.log(error)
  }
}

const insertStorage = async () => {
  try {
    const insertQuery = `
        INSERT INTO storage (name, price, space, type)
        VALUES ($1, $2, $3, $4)
      `
    const storages = JSON.parse(data_storage)
    for (let storage of storages) {
      const values = [
        storage.name,
        storage.price,
        storage.space,
        storage.type
      ]
      await pool.query(insertQuery, values)
      console.log(`✅ added ${storage.name}`)
    }
  } catch (error) {
    console.log(error)
  }
}

const setup = async () => {
  await createCPUsTable()
  await createCPUsTable()
  await createGPUsTable()
  await createMotherboardsTable()
  await createRAMsTable()
  await createStorageTable()
  await insertCPUs()
  await insertGPUs()
  await insertMotherboards()
  await insertRAMs()
  await insertStorage()
}

export default setup;