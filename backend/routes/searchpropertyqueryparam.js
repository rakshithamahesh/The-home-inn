const express = require('express')
const router = express.Router()
const Property = require('../models/property')

// API for searching property based on city and/or type
// Eg request : GET http://localhost:9000/searchproperty/?searchParam=worley
router.get('/', async (req, res) => {
  try {
    var re = new RegExp(req.query.searchParam);

    const property = await Property.find({
      $or: [
        {
          propertyType: {
            $regex: req.query.searchParam,
            $options: "i"
          }

        }, {
          'address.city': {
            $regex: req.query.searchParam,
            $options: "i"
          }
        }
      ]
    });

    res.send(property)

  } catch (err) {
    res.send("No user found with id : ")
  }
})



module.exports = router