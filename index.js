import express, { json } from 'express';
import cors from 'cors';
import todoRouter from './routes/todo-routes.js'
import dotenv from 'dotenv';
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

const corsOption = {
    origin:"*", //to allow every origin
}

app.use(cors(corsOption))
app.use(json())
app.use("/todo",todoRouter)


app.listen(PORT,() => {console.log(`Server started on ${PORT}`)})