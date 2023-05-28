import React from "react";
import Sidemenu from "./Sidemenu";
import Header from "./Header";
import Footer from "./Footer";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

function ViewProperty() {

  const navigate = useNavigate()

  const propertyUpdate = (property) => {
    localStorage.setItem("propertytoupdate", JSON.stringify(property))
    navigate('/updateproperty')
  };



  const propertyDelete = (propertyId) => {
    const input = { propertyId: propertyId }
    console.log(propertyId)
    fetch('host/delete', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(input)
    })
      .then(res => res.json())
      .then((data) => {

        navigate('/home')

      });
  };

  const myPropertiesString = localStorage.getItem("myProperties");
  const myProperties = JSON.parse(myPropertiesString);

  console.log(myProperties)

  return (
    <div>
      <div>
        <div className="wrapper">
          <Sidemenu></Sidemenu>
          <div id="content">
            <Header></Header>

            <h1 className="popular-property">My Properties</h1>
            <div className="App">
              <table className="table table-hover" id="checkDataTable">
                <thead>
                  <tr>
                    <th>Property Title</th>

                    <th>No. of Guests</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Available From</th>
                    <th>Available To</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myProperties.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td>{val.title}</td>
                        <td>{val.guests}</td>
                        <td>{val.address.city}</td>
                        <td>{val.address.state}</td>
                        <td><Moment format="MM/DD/YYYY">{val.availabilityFrom}</Moment></td>
                        <td><Moment format="MM/DD/YYYY">{val.availabilityTo}</Moment></td>
                        <td>
                          <button
                            type="button"
                            onClick={() => propertyUpdate(val)}
                            className="deleteRow btn btn-outline-warning propertydetailsupdateButton"
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            onClick={() => propertyDelete(val._id)}
                            className="deleteRow btn btn-outline-delete propertydetailsdeleteButton"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ViewProperty;
