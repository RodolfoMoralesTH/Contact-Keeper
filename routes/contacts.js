const express = require('express');
const router = express.Router();

//@route    GET api/contacts 
//@desc     Get all users contacts
//@access   Private
router.get('/', (req, res) => {
    res.send('Gets all contacts');
});

//@route    POST api/contacts 
//@desc     Add a new contact
//@access   Private
router.post('/', (req, res) => {
    res.send('Add contacts');
});

//@route    PUT api/contacts 
//@desc     Update contact
//@access   Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

//@route    DELETE api/contacts 
//@desc     delete contact
//@access   Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;