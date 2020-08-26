const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
////////////////////////////////
const app=express()
////////////////////////////////
app.use(express.json())
dotenv.config({path:'./config/config.env'})

const PORT= process.env.PORT||5000
//adding cors support
app.use(cors())
//implementing routes
app.use('/',require('./Routes/getResponse'))

const server=app.listen(PORT, ()=>console.log(`server running in Production mode on port ${PORT}`))

//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});