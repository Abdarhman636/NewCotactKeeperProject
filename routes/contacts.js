const express = require('express')
const router = express.Router()


// Router for get all users contacts
//api/contacts 
//private
router.get('/', (req, res) => {
     res.send('Get all contacts')
})

// Router for add new contact
//api/contacts
//public
router.post('/', (req, res) => {
     res.send('Add new contact')
})

// Router for update the contact
//api/contacts:id
//private
router.put('/:id', (req, res) => {
     res.send('update contact')
})


// Router for delete the contact
//api/contacts:id
//private
router.delete('/:id', (req, res) => {
     res.send('delete contact')
})


module.exports = router