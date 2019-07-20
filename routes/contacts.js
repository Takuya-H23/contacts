const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc Get all user's contacts
// @access Private
router.get('/', (req, res) => {
  res.send("get user's contacts");
});

// @route POST api/contacts
// @desc Add new contact
// @access Private
router.post('/', (req, res) => {
  res.send('add contact');
});

// @route PUT api/contacts/:id
// @desc Update contact
// @access Private
router.put('/:id', (req, res) => {
  res.send('update contacts');
});

// @route DELETE api/contacts/:id
// @desc Get all user's contacts
// @access Private
router.delete('/', (req, res) => {
  res.send('delete contacts');
});

module.exports = router;
