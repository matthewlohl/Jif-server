const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json());
const data = require('./data')

app.get('/', (req, res) => res.send('Welcome to jif server'))

// GET data
app.get('/ipj', (req, res) => {

  res.json(data)
  res.status(200).send()
})

// GET random
app.get('/ipj/random', (req, res) => {

    res.send(data[Math.floor(Math.random() * data.length)])
})



// GET individual Id
app.get('/ipj/:id', (req,res) => {
  
    try{
        const dataId = parseInt(req.params.id)
        const selectedData = data.find(data => data.id === dataId)
        if(req.params.id === 'new' ){
         
            res.status(200).send();
            
        } else if(!selectedData){
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
app.post('/ipj', (req, res) => {
    
    const newId = data[data.length-1].id + 1;
    const newTitle = req.body.title
    const newDate = req.body.date
    const newText = req.body.text
    const newGif = req.body.gif
    const newEmoji = [];
    const newComment = [];
    const newPost = {id: newId, title: newTitle, date: newDate, text: newText, gif: newGif, emoji: newEmoji, comment: newComment}
    data.push(newPost)
    res.status(201).send(newPost)
})

app.post('/comment', (req, res) => {
    const index = data.findIndex(data => data.id === parseInt(req.body.id));
    console.log(index)
    const newComment = req.body.comment
    console.log(newComment)
    data[index].comment.push(newComment)
    res.status(201).send(newComment)
})


app.post('/emoji', (req,res) => {
    const index = data.findIndex(data => data.id === parseInt(req.body.id));
    console.log(index)
    const newEmoji = req.body.emoji;
    console.log(newEmoji)
    data[index].emoji.push(newEmoji)
    res.status(201).send(newEmoji)
})



// GET edit 


// app.get('/ipj/:id/edit', (req, res) => {

//         const id = req.body.id
//         const newComment = req.body.comment;
//         // const newEmoji = req.body.newEmoji;
//         console.log(id);
//         console.log(newComment);
//         const comment = data[id].comment
//         // const emoji = data[id].emoji
//         comment.push(newComment)
//         // emoji.push(newEmoji)
//         res.status(201).put('not sure what to put in')
// })



module.exports = app;

