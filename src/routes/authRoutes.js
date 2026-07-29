import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../prismaClient.js'


const router = express.Router()


// Register a new user endpoint /auth/register
router.post('/register', async(req,res)=>{
    const {username,password} = req.body;

    //save th e username and the pssword as irreversibly encrypted

    //emaail is lstored like: test@gmail.com and pass like hased: ddhjhjff%%#$# dssjnjksj% ......

    //encrypt the passowrd 

    const hashPassword  = bcrypt.hashSync(password,8);

        //save t he new user and save the hashed password to the db
    try{

        const user = await prisma.user.create({
            data: {
                username,
                password: hashPassword
            }

        })


        // now we have a user, i want to add theiur first todo forr them

        const defaultTodo  = `Hello! Add your first todo`;
        await prisma.todo.create({
            data:{
                task:defaultTodo,
                userId: user.id
            }
        })

        //create a token

        //jwt.sign(PAYLOAD, SECRET_KEY, OPTIONS);
        const token = jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'24h'});
        res.json({token})





    }
    catch(err){
        console.log(err.message);
        res.sendStatus(503);

    }


})

router.post('/login',async(req,res)=>{

    // we get their e mail and we lookup the password associated with that email in the databse 

    //but we get it back and see its encrypted , which  means that we can n ot compare it to the one that just useer trying to login 


    //so what we can to do , is again, one way encrypt the password the user has just entered 

    //

    const {username,password} = req.body;

    try{
        const  user = await prisma.user.findUnique({
            where:{
                username:username
            }

        })

            //If we cannot find a  user associated with that username,return out from the function
        if(!user){
            return res.status(404).send({message:"User not found"});

        }

        const passIsValid = bcrypt.compareSync(password,user.password);

            //If password doesnoty  match,return out  of the function
        if(!passIsValid){
            return res.status(401).send({message:"Invalid Password"})

        }

     
        console.log(user);

        //If p assword matched we have the successful authetication 
        // else{
            const  token = jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'24h'})
            res.send({token});



        // }


    }
    
    catch(err){
        console.log(err.message);
        res.sendStatus(503);
    }
})

export default router