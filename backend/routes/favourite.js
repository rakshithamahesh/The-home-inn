const express = require('express')
const router = express.Router()
const Favourite = require('../models/favourites')
const Property = require('../models/property')



// API for getting all the favourites of a specific user
// Eg request : GET http://localhost:9000/favourites/view

router.post('/view', params = async (req, res) => {
  try {
    const allFavourites = await Favourite.findOne({ userId: req.body.userId })

    const properties = []
    var property = null

    let allProperties = allFavourites.propertyId

    if (allProperties != null) {

      for (var i of allProperties) {
        property = await Property.findById(i)
        properties.push(property)
      }
    }


    res.status(200).json(properties)

  } catch (err) {
    res.send("No favourites found for user with id : " + req.body.userId)
  }
})




// API for adding favourites of a specific user
// Eg request : POST http://localhost:9000/favourite/add

router.post('/add', params = async (req, res) => {
  try {
    const allFavourites = await Favourite.findOne({ userId: req.body.userId })

    var properties = []

    if (!allFavourites) {
      properties.push(req.body.propertyId)
      const favouritesprops = new Favourite({

        userId: req.body.userId,
        propertyId: properties

      })

      const addedfavourite = await favouritesprops.save()

      const finalProperties = []
      var property = null

      let allProperties = addedfavourite.propertyId

      if (allProperties != null) {

        for (var i of allProperties) {
          property = await Property.findById(i)
          finalProperties.push(property)
        }
      }


      res.status(200).json(finalProperties)



    } else {

      var properties = allFavourites.propertyId
      properties.push(req.body.propertyId)


      const addedFavourite = await allFavourites.save()

      const finalProperties = []
      var property = null

      let allProperties = addedFavourite.propertyId

      if (allProperties != null) {

        for (var i of allProperties) {
          property = await Property.findById(i)
          finalProperties.push(property)
        }
      }
      res.status(200).json(finalProperties)

    }

  } catch (err) {
    res.send("No favourites found for user with id : " + req.query.userId)
  }
})

// API for removing favourite of a specific user
// Eg request : GET http://localhost:9000/favourites

router.post('/remove', params = async (req, res) => {
  try {
    const allFavourites = await Favourite.findOne({ userId: req.body.userId })

    var properties = []

    if (!allFavourites) {
      res.json("User Id not present")
    } else {
    }
    var properties = allFavourites.propertyId
    var index = properties.indexOf(req.body.propertyId);
    if (index !== -1) {
      properties.splice(index, 1);
    }

    const addedFavourite = await allFavourites.save()

    const finalProperties = []
    var property = null

    let allProperties = addedFavourite.propertyId

    if (allProperties != null) {

      for (var i of allProperties) {
        property = await Property.findById(i)
        finalProperties.push(property)
      }
    }

    res.status(200).json(finalProperties)

  }

  catch (err) {
    res.send("No favourites found for user with id : " + req.query.userId)
  }
})

module.exports = router