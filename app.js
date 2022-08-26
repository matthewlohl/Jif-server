const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json());
const data = require('./data')




// GET data
app.get('/ipj', (req, res) => {
  res.json(data)
})




// GET individual Id
app.get('/ipj/:id', (req,res) => {
  
    try{
        const dataId = parseInt(req.params.id)
        const selectedData = data.find(data => data.id === dataId)
        if(req.params.id === 'new' ){
            res.status(200).send();
        }else if(!selectedData){
            throw new Error('This journal entry does not exist')
        }else{
        res.send(selectedData)}
      }catch(err){
        res.status(404).send({
            message: err.message
        })
      }
    
})




// Delete ID 
app.delete('/ipj/:id', (req,res) => {
  
    const index = data.findIndex(data => data.id === parseInt(req.params.id));
    data.splice(index,1);
    res.status(204).end();
    
})




// POST 



// GET random




// GET edit 


module.exports = app;