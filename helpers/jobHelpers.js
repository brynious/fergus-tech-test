// Load Job model
const Job = require('../models/Job');

const getNextJobNumber = async () => {
  const newestJob = await Job.find().sort({ job_num: -1 }).limit(1);

  // if no jobs exist in DB, start at 1. Else, increment by 1.
  if (newestJob.length < 1) {
    return 1;
  } else {
    return parseInt(newestJob[0].job_num) + 1;
  }
};

module.exports = { getNextJobNumber };
