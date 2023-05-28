const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')

// API for user login . Login with email and password
// Eg request : POST http://localhost:9000/user/login

router.post('/login', async (req, res) => {

    User.findOne({ emailId: req.body.emailId }).then(user => {
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            console.log(user)
            res.status(200).json(user)
        } else {
            console.log(res)
            res.status(404).json({ message: 'Incorrect credentials' })
        }
    })
        .catch((error) => {
            console.log(error)
            res.status(404).json({ message: 'No user find with given emailId' })
        })

})


// API for user sign up . First page for any user to register for our website
// Eg request : POST http://localhost:9000/user/signup

router.post('/signup', async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        emailId: req.body.emailId,
        mobileNo: req.body.mobileNo,
        isHost: req.body.isHost

    })
    const hash = bcrypt.hashSync(req.body.password, 10)
    user.password = hash

    try {
        const addedUser = await user.save()
        res.status(200).json(addedUser)
    } catch (err) {
        res.status(404).json({ message: 'There was an issue adding the user. Please try again later!!' })
    }
})

module.exports = router