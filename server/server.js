import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import './config/dotenv.js';
import router from './routes/router.js';

import setup from './db/setup.js'
setup()

const app = express()
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('<h1>DIY Computer API</h1>')
})

if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'computer.png')))
}
else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'computer.png')))
    app.use(express.static('public'))
}

if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})