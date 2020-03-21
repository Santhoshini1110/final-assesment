var express=require('express');
var path=express.Router();
const connection=require('../database/db.js');

path.get('/api/customer/:firstname',async(req,res)=>{
    try{
    const result=await connection.find({"firstname":req.body.firstname});
    res.send(resullt);
    }
    catch{
        res.send("unable to get students");
    }

});

path.get('/api/customer',async(req,res)=>{
    try{
    const result = connection.find();
    res.send(resullt);
    }
    catch{
        res.send("unable to get students");
    }

});

path.post('/api/insert/',async(req,res)=>{
    try{
        var customer={
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state}
    const result = await connection.insertOne(customer);
    res.send(result);
    }
    catch{
        res.send("student with given id cannot be added");
    }

});

path.delete('/api/delete/:firstname',async(req,res)=>{
    try{
    const result = await connection.deleteOne({"firstname":req.body.firstname});
    res.send(result);
    }
    catch{
        res.send("student with given id is not found");
    }

});

path.put('/api/update/firstname',async(req,res)=>{
    try{
        var customer={
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state}

const result= await connection.updateOne({"firstname":req.params.firstname},{$set:student});
    res.send(result);
    }
    catch{
        res.send("student with given id is not found");
    }

});

module.exports=path;