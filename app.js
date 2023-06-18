// Task1: initiate app and run server at 3000
const express = require('express');
const { model } = require('mongoose');
const app = express();


const logger=require('morgan');
app.use(logger('dev'));

require('dotenv').config()
const PORT=process.env.PORT;
const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));



// Task2: create mongoDB connection 

require('./db')



//Task 2 : write api with error handling and appropriate api mentioned in the TODO below

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const empData= require('./model/emp');
const {urlencoded} = require('body-parser');





//TODO: get data from db  using api '/api/employeelist'

app.get('/api/employeelist',async (req,res)=>{
    
    try {
        let data = await empData.find({});
        res.send(data)

    } catch (err) {
        res.send('error in fetching data'+ err);
    }
})


//TODO: get single data from db  using api '/api/employeelist/:id'  

app.get('/api/employeelist/:id',async (req,res)=>{
    
    try {
        //console.log(req.params.id)
        let data = await empData.findById(req.params.id);
        res.send(data)

    } catch (err) {
        res.send('error in saving data'+ err);
    }
})



//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.post('/api/employeelist', async (req,res)=>{

    try {
        let item = req.body;
        const saveddata = await empData(item);
        saveddata.save()
        res.send("Data added to DB Successfully")

    } catch (err) {
        res.send('error in adding data');
    }
}
)




//TODO: delete a employee data from db by using api '/api/employeelist/:id'

app.delete('/api/employeelist/:id', async (req,res)=>{

    try {
        let id = req.params.id;
        const updated =await empData.findByIdAndDelete(id); 
        res.send("Deleted")

    } catch (err) {
        res.send('error in updating data');
    }
}
)



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.put('/api/employeelist/:id', async (req,res)=>{

    try {
        let id = req.params.id
        //console.log(id);
        const updateddata = {$set: req.body}
        //console.log(updateddata)
        const updated =await empData.findByIdAndUpdate(id,updateddata);
        //console.log(updated);
        //res.json(updated);
        res.send("Updated");

    } catch (err) {
        res.send('error in updating data');
    }
}
)




//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

