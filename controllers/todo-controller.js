import { pool } from "../configs/db-config.js"

export const getTodoListController = async(req,res) => {
   
    try {
        const limit = parseInt(req.query.limit) || 5;
        const offset = parseInt(req.query.offset) || 0;
        const result = await pool.query(`select * from todo_collection where is_done = false order by todo_id desc limit ${limit} offset ${offset}`)
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
        return res.status(200).json({
            data: formattedTodoList,
            message: "Tasks fetched successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:null,
            message: "Something went wrong!",
            success: false
        })
    }
}

export const insertTodoListController = async(req,res) => {
    try {
        const {title, description} = req.body 
        await pool.query(`insert into todo_collection(title, description) values ( $1, $2 )`,[title,description])      
        return res.status(200).json({
            data: {title,description},
            message: "Task added successfully!",
            success:true
        })  
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:null,
            message:"Something went wrong!",
            success:false
        })
    }
}

export const marksAsDoneController = async(req,res) => {
    try {
        const {id} = req.body
        await pool.query(`update todo_collection set is_done = true where todo_id = ${id}`)
        return res.status(200).json({
            data:null,
            message:"Task marked as done!",
            success:true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:null,
            message:"Something went wrong!",
            success:false
        })
    }
}