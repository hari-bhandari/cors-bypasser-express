const express=require('express')
const cors=require('cors')
////////////////////////////////
const app=express()
////////////////////////////////
app.set('trust proxy',true);
const PORT= process.env.PORT||5000
//sadding cors support
app.use(cors())

const server=app.listen(PORT,console.log(`server running in Production mode on port ${PORT}`))

//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});