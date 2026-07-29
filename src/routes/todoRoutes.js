import express from 'express'
import prisma from '../prismaClient.js';


const router = express.Router();

//get all the todos of the logged in users

router.get('/',async (req,res)=>{

    const todos = await prisma.todo.findMany({
        where:{
            userId:req.userId
        }

    })
    res.send(todos);


})

//Create the new todos
router.post('/',async (req,res)=>{
    const { task } = req.body;
    const todo = await prisma.todo.create({
        data:{
            task,
            userId:req.userId
        }
    })
    

    res.json(todo)


})

// Update the existing todos
router.put('/:id',async (req,res)=>{
    const {completed} = req.body;
    const {id}= req.params;
    const {page}=req.query;

    const updatedTodo = await prisma.todo.update({
        where:{
            id: parseInt(id),
            userId:req.userId

        },
        data:{
            completed:!!completed // this convert the completed to the boolean
        }
    })
    res.json(updatedTodo);


})

//delete the todos

router.delete('/:id',async (req,res)=>{
    const {id} =  req.params;
    const userId = req.userId;

    const deleteTodos = await prisma.todo.delete({
        where:{

            id: parseInt(id),

        }

    })
   
    res.json(deleteTodos);

})

export default router

