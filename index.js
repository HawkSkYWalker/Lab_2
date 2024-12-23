const express = require('express');
const bodyparser = require('body-parser');
const app = express();

//Middleware
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('public')); //server static /file(CSS)
app.set('view engine', 'ejs'); //set ejs template

let todos=[]; //allow to store tasks

//route
app.get('/',(req,res) => {
    res.render('index', {todos});
});

app.post('/add',(req,res) => {
    const newtodo = req.body.todo;
    if (newtodo) todos.push(newtodo); // add new task to todo list
    res.redirect('/');
});

app.post('/delete', (req,res) =>{
    const index = req.body.index;
    todos.splice(index, 1);
    res.redirect('/');
});

//start server
const PORT = 3000
app.listen(PORT, () => {console.log(`Server in running at http://localhost:${PORT}`)});