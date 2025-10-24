import express, { json } from 'express';
import cors from 'cors';
import { pool } from './configs/db-config.js';

const app = express();
const PORT = 3000;

const corsOption = {
    origin:"*", //to allow every origin
}

app.use(cors(corsOption))
app.use(json())

app.get("/task",async(req,res) => {
    try {
        const result = await pool.query('select * from main.todo_collection')
        console.log(result.rows)
        return res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Something went wrong!"})
    }
})

app.listen(PORT,() => {console.log("Server started..")})