const express = require('express')
const router = express.Router()
const Reviews = require('../models/reviews')

// API for creating a new reservation with userId passed as a query param
// Eg request : POST http://localhost:9000/review
/* 
  Body:
  {
    "userId": "636683d6dd45f7b7e8762172",
    "propertyId": "636683d6dd45f7b7e8762172",
    "comment": "test",
    "rating": "5"
  }
*/

router.post('/', async (req, res) => {
  const reviews = new Reviews({
    userId: req.body.userId,
    propertyId: req.body.propertyId,
    comment: req.body.comment,
    rating: req.body.rating
  })

  try {
    const addedReview = await reviews.save()
    console.log("New Review added!!")
    res.status(200).json(addedReview)
  } catch (err) {
    res.status(404).json({ message: "There was an issue adding the review. Please try again later!!" })
    console.log("Error adding review")
  }
})

// API for getting all reviews of a property
// Eg request : POST http://localhost:9000/review/
router.get('/:propertyId', async (req, res) => {
  try {
    const reviews = await Reviews.find({ propertyId: req.params.propertyId })
    console.log(reviews)
    res.status(200).json(reviews)
    console.log("All reviews fetched")

  } catch (err) {
    res.status(404).json({ message: 'Error' + err })
  }
})

module.exports = router