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
app.get('/todos', auth, getAllTodos);
app.post('/todo', auth, postTodo);
app.delete('/todo/:todoId', auth, deleteTodo);
app.put('/todo/:todoId', auth, editTodo);
exports.api = functions.https.onRequest(app);


// users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetails);