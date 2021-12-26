const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const cron =require('cron')
const axios=require('axios')
const path=require('path')
////////////////////////////////
const app=express()
////////////////////////////////
app.use(express.json())
dotenv.config({path:'./config/config.env'})

const PORT= process.env.PORT||5000
//adding cors support
app.use(cors())
//node-cron
const cronJob = cron.job('*/1 * * * *', async function(){
    await axios.get('https://golangsite.herokuapp.com/')
});

cronJob.start()
//implementing routes
app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname,'index.html')))

app.use('/cors',require('./Routes/getResponse'))

const server=app.listen(PORT, ()=>console.log(`server running in Production mode on port ${PORT}`))

//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});
