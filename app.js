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





// Delete ID 
app.delete('/ipj/:id', (req,res) => {
  
    const index = data.findIndex(data => data.id === parseInt(req.params.id));
    data.splice(index,1);
    res.status(204).end();
    
})



// GET new 


// POST 



// GET random




// GET edit 


module.exports = app;