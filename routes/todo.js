module.exports = function(app){
  var Todo = requiere('../models/todo.js');

  findAllTodos = function(req, res){
    Todo.find(function(err, todos) {
      if(!err) {
        res.send(todos);
      } else {
	console.log('ERROR: ' + err);
      }
    });
  };

  findById = function(req, res){
    Todo.findById(req.param.id, function(err, todo) {
      if(!err){
        res.send(todo);
      } else {
	console.log('ERROR: ' + err);
      }
    });
  };

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
}
