// const express = require ('express')
// const app =  express()

import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'

console.log('server running')

const app = express()
const PORT = process.env.PORT || 5000



//get the file path form the  url of the current module
const __filename=fileURLToPath(import.meta.url)

//Get the directlry name form the current module or formt he filepath

const __dirname = dirname(__filename)


//serve the HTML file fromt he /public directory also tell the express to serve all file from the public folder.Any request for the css file will be resolved to the public directory


//Middleware
app.use(express.json());

app.use(express.static(path.join(__dirname,'../public')))




// serving up the html files form the /public directiory the static file
app.get('/',(req,res)=>{
    // res.status(200).send(`this is homepage`)
    res.sendFile(path.join(__dirname,'../public','index.html'))
    // res.send("hello");


})



//Routes
app.use('/auth',authRoutes)
app.use('/todos',authMiddleware,todoRoutes)

app.listen(PORT,()=>{
    console.log(`Server successfully running on the port: ${PORT}`)

}) 