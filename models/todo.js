var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var todoSchema = new Schema({
  done: {type: Boolean},
  date: {type: Date};
  title: {title: String}
});

module.exports = mongoose.model('Todo', tooSchema);
  
