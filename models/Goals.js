var mongoose = require('mongoose');

var GoalSchema = new mongoose.Schema({
  description: String
}, { collection: 'jesus-goals' });

mongoose.model('Goal', GoalSchema);
