import React, { useState } from "react";
import Sidemenu from "./Sidemenu";
import Header from "./Header";
import Footer from "./Footer";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

function ReservationDetails() {


  const [error, setError] = useState(false);
  const [isNull, setIsNull] = useState(false);
  var isError = false

  const reservationString = localStorage.getItem('reservations');

  const reservations = JSON.parse(reservationString);
  const navigate = useNavigate()


  const propertyDelete = (reservationId) => {

    const queryString = `${reservationId}`
    fetch(`reservations/${queryString}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST'
    })
      .then(res => {
        if (!res.ok) {
          setError(true);
          isError = true
        } else {
          setError(false);
          isError = false;
          return res.json()
        }
      }).then((data) => {
        console.log(isError)
        if (!isError) {

          localStorage.setItem('reservations', JSON.stringify(data));
          navigate('/home')
        }
      })

  };

  return (
    <div>
      <div>
        <div className="wrapper">
          <Sidemenu></Sidemenu>
          <div id="content">
            <Header></Header>

            <div className="App">
              <h1 className="popular-property">Your Reservations</h1>


              {(error) === true ? <h4 className="error">Cannot delete reservation before 48 hours of checkin or after checkout date</h4> : null}
              <br></br>
              {
                (isNull)
                  ? <p>There are no Reservations yet</p>
                  : <table className="table table-hover" id="checkDataTable">
                    <thead>
                      <tr>
                        <th>Property Title</th>
                        <th>No. of Guests</th>
                        <th>Location</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      {reservations.map((val, key) => {
                        return (
                          <tr key={key}>
                            <td>{val.propertyTitle}</td>
                            <td>{val.guests}</td>
                            <td>{val.city}, {val.state}</td>
                            <td><Moment format="MM/DD/YYYY">{val.checkIn}</Moment></td>
                            <td><Moment format="MM/DD/YYYY">{val.checkOut}</Moment></td>
                            {(val.isActive)
                              ? <td>
                                <button
                                  type="button"
                                  onClick={() => propertyDelete(val.reservationId)}
                                  className="deleteRow btn btn-outline-delete propertydetailsdeleteButton"
                                >
                                  Delete
                                </button>
                              </td>
                              : <td><button
                                type="button"
                                disabled
                                className="deleteRow btn btn-outline-delete propertydetailsdeleteButton"
                              >
                                Cancelled
                              </button></td>}

                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
              }

            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ReservationDetails;
