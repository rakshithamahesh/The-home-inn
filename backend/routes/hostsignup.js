const express = require('express')
const router = express.Router()
const User = require('../models/user')

// API for when user wishes to join as host  .
// Eg request : POST http://localhost:9000/hostsignup/
router.post('/', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId })

    user.isHost = true
    const updatedUser = await user.save()

    res.status(200).json(updatedUser)

  } catch (err) {
    res.status(404).json({ message: "No user found with id : " + req.body.userId })
  }
})



module.exports = router