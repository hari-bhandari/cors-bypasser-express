const express =require('express')
const router=express.Router();
const axios=require('axios')

router.post('/',async(req,res)=>{
    //removing host as it was not getting a response with host
    delete req.headers.host
    const config = {
        headers: req.headers
    };
    const formData = req.body;
    let response;
    try {
        response = await axios.post(req.query.url, formData, config);

    } catch (err) {
        res.status(500).json({error:'Something went wrong'})
    }
    response&&res.status(200).send(response.data)
})
//get response
router.get('/',async(req,res)=>{
    let response;
    try {
        response = await axios.get(req.query.url);
        console.log(response.data)

    } catch (err) {
        console.log(err)
        res.status(500).json({error:'Something went wrong'})
    }
    response&&res.status(200).send(response.data)
})
//update
router.put('/',async(req,res)=>{
    delete req.headers.host
    const config = {
        headers: req.headers
    };
    const formData = req.body;
    let response;
    try {
        response = await axios.put(req.query.url, formData, config);

    } catch (err) {
        res.status(500).json({error:'Something went wrong'})
    }
    response&&res.status(200).send(response.data)
})
//delete
router.delete('/',async(req,res)=>{
    let response;
    try {
        response = await axios.delete(req.query.url);
    } catch (err) {
        res.status(500).json({error:'Something went wrong'})
    }
    response&&res.status(200).send(response.data)
})
module.exports=router;