const express = require('express');
const router = express.Router();

// Load Note model
const Note = require('../../models/Note');

// @route GET api/notes
// @description Get all notes
// @access Public
router.get('/', (req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(404).json({ error: 'No Notes found' }));
});

// @route GET api/notes/job/:job_id
// @description Get all notes for a specific job
// @access Public
router.get('/job/:job_id', (req, res) => {
  Note.find({ job_id: req.params.job_id })
    .then(notes => res.json(notes))
    .catch(err =>
      res.status(404).json({ error: 'No Notes found for this job.' })
    );
});

// @route GET api/notes/:id
// @description Get single note by id
// @access Public
router.get('/:id', (req, res) => {
  Note.findById(req.params.id)
    .then(note => res.json(note))
    .catch(err => res.status(404).json({ error: 'No Note found' }));
});

// @route POST api/notes/
// @description add/save note
// @access Public
router.post('/', (req, res) => {
  // TODO: validate job_id
  Note.create(req.body)
    .then(note => res.json({ success: 'Note added successfully' }))
    .catch(err =>
      // return validation failure reason for first item in Object returned (mongoose validator will only return one)
      res.status(400).json({ error: Object.values(err.errors)[0].message })
    );
});

// @route PUT api/notes/:id
// @description Update note
// @access Public
router.put('/:id', (req, res) => {
  req.body.updated_date = Date.now();

  // TODO: restrict being able to set job_id via API call
  Note.findByIdAndUpdate(req.params.id, req.body)
    .then(note => res.json({ success: 'Updated successfully' }))
    .catch(err =>
      // return validation failure reason for first item in Object returned (mongoose validator will only return one)
      res.status(400).json({ error: Object.values(err.errors)[0].message })
    );
});

// @route DELETE api/notes/:id
// @description Delete note by id
// @access Public
router.delete('/:id', (req, res) => {
  Note.findByIdAndRemove(req.params.id, req.body)
    .then(note => res.json({ success: 'Note entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'Note does not exist.' }));
});

module.exports = router;
