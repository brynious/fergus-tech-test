const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required.'],
  },
  job_num: {
    type: Number,
    required: [true, 'Job number could not be generated.'],
    unique: true,
  },
  status: {
    type: String,
    required: [true, 'Job status not provided.'],
    enum: {
      values: ['scheduled', 'active', 'invoicing', 'to_priced', 'completed'],
      message: 'Invalid job status provided.'
    },
  },
  description: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
  customer_name: {
    type: String,
    required: [true, 'Customer name not provided.'],
  },
  customer_mobile: {
    type: String,
  },
});

module.exports = Job = mongoose.model('job', JobSchema);
