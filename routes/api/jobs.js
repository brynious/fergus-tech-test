const express = require('express');
const router = express.Router();

const { getNextJobNumber } = require('../../helpers/jobHelpers');

// Load Job model
const Job = require('../../models/Job');

// @route       GET api/jobs/status
//              GET api/jobs/status?sortBy=job_num&order=-1
// @description Get all jobs. status param, sort, and order are optional.
//              1 is ascending and -1 is descending
// @access      Public
router.get('/:status?', (req, res) => {
  const filterObj = req.params.status ? { status: req.params.status } : null;
  const sortObj = { [req.query.sortBy]: req.query.order };

  Job.find(filterObj)
    .sort(sortObj)
    .then(jobs => res.json(jobs))
    .catch(err => res.status(404).json({ error: 'Unable to access database' }));
});

// @route GET api/jobs/:id
// @description Get single job by id
// @access Public
router.get('/:id', (req, res) => {
  Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err => res.status(404).json({ error: 'Unable to access database' }));
});

// @route POST api/jobs
// @description add/save job
// @access Public
router.post('/', async (req, res) => {
  req.body.job_num = await getNextJobNumber();

  Job.create(req.body)
    .then(job => res.json({ success: 'Job added successfully' }))
    .catch(err =>
      // return validation failure reason for first item in Object returned (mongoose validator will only return one)
      res.status(400).json({ error: Object.values(err.errors)[0].message })
    );
});

// @route PUT api/jobs/:id
// @description Update job
// @access Public
router.put('/:id', async (req, res) => {
  req.body.updated_date = Date.now();

  Job.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
    .then(job => res.json({ success: 'Job updated successfully' }))
    .catch(err =>
      // return validation failure reason for first item in Object returned (mongoose validator will only return one)
      res.status(400).json({ error: Object.values(err.errors)[0].message })
    );
});

// @route DELETE api/jobs/:id
// @description Delete job by id
// @access Public
router.delete('/:id', (req, res) => {
  Job.findByIdAndRemove(req.params.id, req.body)
    .then(job => res.json({ success: 'Job entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a job' }));
});

module.exports = router;
