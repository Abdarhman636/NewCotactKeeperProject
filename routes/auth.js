const express = require('express')
const router = express.Router()


// Router for git the logged in user 
//api/auth 
//private
router.get('/', (req, res) => {
     res.send('Get logged in user')
})


// Router forAuth the user and get the token
//api/auth 
//public
router.post('/', (req, res) => {
     res.send('Login user')
})

module.exports = router