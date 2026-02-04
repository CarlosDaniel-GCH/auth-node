require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connectBD = require('./src/config/db')
const authRoutes = require('./src/routes/auth')

const app = express()

connectBD()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/products', require('./src/routes/products'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})