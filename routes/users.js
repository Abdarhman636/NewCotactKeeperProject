const express = require('express')
const { check, validationResult } = require('express-validator')
const router = express.Router()
const bcrypt = require('bcryptjs')

const User = require('../models/User')

// Router for register a user 
//api/users 
//public
router.post('/', [
     check('name', 'name is required').not().isEmpty(),
     check('email', 'please include a valid email').isEmail(),
     check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
     const errors = validationResult(req)
     if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() })
     }

     const { name, email, password } = req.body

     try {
          let user = await User.findOne({ email: email })

          if (user) {
               return res.status(400).json({ msg: "User already exists" })
          }

          user = new User({
               name,
               email,
               password
          })

          const salt = await bcrypt.genSalt(10)

          user.password = await bcrypt.hash(password, salt)

          await user.save()

          res.send('user saved')
     } catch (err) {
          console.error(err.message)
          res.status(500).send('server error')
     }


     res.send('passed')
})


module.exports = router