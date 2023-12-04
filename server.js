import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConn } from './db/dbConnection.js';
import { ticketRoutes } from './routes/ticketRoutes.js';



//configurations
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

//middlewares
app.use('/', ticketRoutes )

const port = process.env.PORT || 8000


app.listen(port, 
    dbConn(),
    console.log(`connected on https://localhost:${port}`)
)