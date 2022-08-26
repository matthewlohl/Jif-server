const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json());
const data = require('./data')




// GET data





// GET individual Id





// Delete ID 





// GET new 


// POST 
app.post('/ipj', (req, res) => {
    const newId = data.length + 1;
    const newTitle = req.body.title
    const newDate = req.body.date
    const newText = req.body.text
    const newGif = req.body.gif
    const newEmoji = req.body.emoji
    const newComment = req.body.comment
    const newPost = {id: newId, title: newTitle, date: newDate, text: newText, gif: newGif, emoji: newEmoji, comment: newComment}
    res.status(201).send(newPost)
})


// GET random

app.get('/ipj/random', (req, res) => {
    res.send(data[Math.floor(Math.random() * data.length)])
})


// GET edit 

app.get('/ipj/:id/edit', (req, res) => {
    try{
        const id = req.body.id
        const newComment = req.body.comment;
        const newEmoji = req.body.newEmoji;

        const comment = data[id].comment
        const emoji = data[id].emoji
        comment.push(newComment)
        emoji.push(newEmoji)
        res.status(201).put('not sure what to put in')
    }

    catch(err){
        res.status(404).send({message: err.message})
    }
})


module.exports = app;
