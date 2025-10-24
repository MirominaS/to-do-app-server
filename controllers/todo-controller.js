import { pool } from "../configs/db-config.js"

export const getTodoListController = async(req,res) => {
    try {
        const result = await pool.query('select * from main.todo_collection')
        console.log(result.rows)
        let todoList = result.rows
        let formattedTodoList = []
        for(let i = 0; i < todoList.length; i++){
            const {todo_id, title, description, created_on, updated_on, is_done, is_deleted} = todoList[i]
            formattedTodoList.push({
                id : todo_id,
                title : title,
                description : description,
                done : is_done,
                delete : is_deleted,
                updated : !(updated_on === null),
                createdOn : created_on,
                updatedOn : updated_on
            })
        }
        return res.status(200).json(formattedTodoList)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Something went wrong!"})
    }
}

export const insertTodoListController = async(req,res) => {
    try {
        const {title, description} = req.body 
        await pool.query(`insert into main.todo_collection(title, description) values ( $1, $2 )`,[title,description])      
        return res.status(200).json({message: "Success!"})  
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Something went wrong!"})
    }
}