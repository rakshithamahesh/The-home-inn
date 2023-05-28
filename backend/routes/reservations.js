const express = require('express')
const router = express.Router()
const Reservation = require('../models/reservation')
const Property = require('../models/property')

// API for getting a reservation by reservation id
// Eg request : GET http://localhost:9000/reservations/636683d6dd45f7b7e8762172

router.get('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id)
    res.json(reservation)

  } catch (err) {
    res.json({ message: "Reservation not found for reservation id : " + req.params.id })
  }
})

// API for creating a new reservation with userId passed as a query param
// Eg request : POST http://localhost:9000/reservations?userId=6365bb10dd45f7b7e8762184
/* 
  Body:
  {
    "hostId": "636683d6dd45f7b7e8762172",
    "propertyId": "636683d6dd45f7b7e8762172",
    "checkIn": "2022-11-20T19:44:27.336Z",
    "checkOut": "2022-11-20T19:44:27.336Z",
    "numberOfGuests": 3
  }
*/

router.post('/', async (req, res) => {
  const reservation = new Reservation({
    guestId: req.body.guestId,
    hostId: req.body.hostId,
    propertyId: req.body.propertyId,
    checkIn: req.body.checkIn,
    checkOut: req.body.checkOut,
    numberOfGuests: req.body.numberOfGuests
  })
  try {

    const property = await Property.findById(reservation.propertyId)

    availableFrom = new Date(property.availabilityFrom);
    availableTo = new Date(property.availabilityTo);

    checkInDate = new Date(reservation.checkIn);
    checkOutDate = new Date(reservation.checkOut);
    checkInDate.setDate(checkInDate.getDate() + 1);
    checkOutDate.setDate(checkOutDate.getDate() + 1);
    if (checkInDate < availableFrom || checkOutDate > availableTo) {

      console.log('Property not available')
      res.status(404).json({ message: "Property not available" })
    } else {
      reservation.isActive = true
      const addedReservation = await reservation.save()
      res.status(200).json(addedReservation)
    }


  } catch (err) {
    res.status(404).json({ message: "There was an issue reserving the property. Please try again later!!" })
    console.log(err)
  }
})

// API for deleting a specific reservation
// Eg request : POST http://localhost:9000/reservations/637a933c7f270bc61bec8b43

router.post('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id)
    const checkindate = reservation.checkIn
    const checkIn = new Date(checkindate)
    const current = new Date()
    checkIn.setDate(checkIn.getDate() - 2);

    if (current.getYear() > checkIn.getYear()) {
      res.status(404).json({ message: 'Cannot delete reservation before 48 hours of checkin' })
    } else if (current.getYear() == checkIn.getYear()) {
      if (current.getMonth() < checkIn.getMonth()) {
        reservation.isActive = false
        const updatedReservation = await reservation.save()
        console.log(updatedReservation)
        res.status(200).json('Reservation deleted with id : ' + req.params.id);
      } else if (current.getMonth() == checkIn.getMonth()) {
        if (current.getDate() < checkIn.getDate()) {
          reservation.isActive = false
          const updatedReservation = await reservation.save()
          console.log(updatedReservation)
          res.status(200).json('Reservation deleted with id : ' + req.params.id);
        } else {
          res.status(404).json({ message: 'Cannot delete reservation before 48 hours of checkin' })
        }
      } else {
        res.status(404).json({ message: 'Cannot delete reservation before 48 hours of checkin' })
      }
    } else {
      reservation.isActive = false
      const updatedReservation = await reservation.save()
      res.status(200).json('Reservation deleted with id : ' + req.params.id);
    }

  } catch (err) {
    res.json({ message: 'There was an issue deleting the reservation with id : ' + req.params.id })
    console.log(err)
  }
})

// API for getting all the reservation of a specific user
// Eg request : GET http://localhost:9000/reservations?userId=6365bb10dd45f7b7e8762184

router.get('/', params = async (req, res) => {
  try {
    const reservations = await Reservation.find({ guestId: req.query.userId })

    const allReservations = []
    for (var reservs of reservations) {
      const property = await Property.findById(reservs.propertyId)
      const checkInObject = new Date(reservs.checkIn)
      checkInObject.setDate(checkInObject.getDate() + 1)
      const checkOutObject = new Date(reservs.checkOut)
      checkOutObject.setDate(checkOutObject.getDate() + 1)
      allReservations.push({
        reservationId: reservs._id,
        propertyTitle: property.title,
        guests: reservs.numberOfGuests,
        city: property.address.city,
        state: property.address.state,
        checkIn: checkInObject,
        checkOut: checkOutObject,
        isActive: reservs.isActive
      })
    }
    res.status(200).json(allReservations)

  } catch (err) {
    res.json({ message: "No reservations found for user with id : " + req.query.userId });
  }
})

module.exports = router