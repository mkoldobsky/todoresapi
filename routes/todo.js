module.exports = function(app){
  var Todo = require('../models/todo.js');

  // GET 
  findAllTodos = function(req, res){
    Todo.find(function(err, todos) {
      if(!err) {
        console.log('GET');
        res.send(todos);
      } else {
	      console.log('ERROR: ' + err);
      }
    });
  };

  // GET
  findById = function(req, res){
    Todo.findById(req.params.id, function(err, todo) {
      if(!err){
        console.log(req.params.id);
        res.send(todo);
      } else {
	console.log('ERROR: ' + err);
      }
    });
  };

  // POST
  addTodo = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var todo = new Todo({
      done: req.body.done,
      title: req.body.title,
      date: req.body.date
    });

    todo.save(function(err){
      if(!err){
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.send(todo);
  };

  // PUT
  updateTodo = function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
      todo.done = req.body.done;
      todo.title = req.body.title; 
      todo.date = req.body.date;

      todo.save(function(err){
        if(!err) {
  	  console.log('Updated');
        } else {
	  console.log('ERROR: ' + err);
	}

	res.send(todo);
      });
    });
  };


  // DELETE
  deleteTodo = function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
      todo.remove(function(err) {
        if (!err) {
          console.log('Removed');
        } else {
          console.log('ERROR: ' + err);
        }
      });
    });
  };

  app.get('/todos', findAllTodos);
  app.get('/todo/:id', findById);
  app.post('/todo', addTodo);
  app.put('/todo/:id', updateTodo);
  app.delete('/todo/:id', deleteTodo);
}
