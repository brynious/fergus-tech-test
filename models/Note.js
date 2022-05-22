const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  job_id: {
    type: String,
    required: [true, 'Note must be linked to a job. No job ID provided.'],
  },
  content: {
    type: String,
    required: [true, 'Note cannot be empty string.'],
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Note = mongoose.model('note', NoteSchema);
