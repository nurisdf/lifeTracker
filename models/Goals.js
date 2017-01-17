var mongoose = require('mongoose');

var GoalSchema = new mongoose.Schema({
  description: String
});

mongoose.model('Goal', GoalSchema);
