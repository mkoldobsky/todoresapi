var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var todoSchema = new Schema({
  done: {type: Boolean},
  date: {type: Date},
  title: {type: String}
});

module.exports = mongoose.model('Todo', todoSchema);
  
