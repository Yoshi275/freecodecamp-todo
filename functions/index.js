const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./utils/auth');
const {
    getAllTodos,
    postTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos')
const {
    loginUser,
    signUpUser,
    getUserDetails
} = require('./APIs/users')

// todos
app.get('/todos', getAllTodos);
app.post('/todo', postTodo);
app.delete('/todo/:todoId', auth, deleteTodo);
app.put('/todo/:todoId', auth, editTodo);
exports.api = functions.https.onRequest(app);


// users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetails);