import { pool } from "../configs/db-config.js"

export const getTodoListController = async(req,res) => {
    try {
        const result = await pool.query('select * from main.todo_collection')
        console.log(result.rows)
        return res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Something went wrong!"})
    }
}