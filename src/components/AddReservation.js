import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "../main.css";
import Footer from './Footer';
import Header from './Header';
import Sidemenu from './Sidemenu';
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

function AddReservation() {

    const stringData = localStorage.getItem("property")
    const property = JSON.parse(stringData);

    const stringUser = localStorage.getItem('user');
    const user = JSON.parse(stringUser);

    const [error, setError] = useState(false)
    var iserror = false;

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {



        const inputData = { guestId: user._id, hostId: property.hostId, propertyId: property._id, checkIn: data.checkIn, checkOut: data.checkOut, numberOfGuests: data.guests }
        fetch("reservations", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(inputData),

        })
            .then(res => {

                if (!res.ok) {
                    iserror = true
                    setError(true)
                } else {
                    iserror = false
                    setError(false)
                    return res.json()
                }
            })
            .then((data) => {


                const queryString = `userId=${user._id}`
                fetch(`reservations?${queryString}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                    .then(res => {
                        if (!res.ok) {

                        } else {
                            return res.json()
                        }
                    })
                    .then((values) => {

                        localStorage.setItem('reservations', JSON.stringify(values));
                        if (!iserror) {

                            navigate('/reservationdetails')
                        }
                    });




            });
    };
    return (

        <div>
            <div className="wrapper">
                <Sidemenu></Sidemenu>
                <div id="content">
                    <Header></Header>
                    <br />
                    <h1 className="popular-property">Reserve Property</h1>
                    <h3 className="popular-property"><b>Availibility - </b> <Moment format="MM/DD/YYYY">{property.availabilityFrom}</Moment> to <Moment format="MM/DD/YYYY">{property.availabilityTo}</Moment></h3>
                    {(error) === true ? <h4 style={{ textAlign: 'center', color: 'gray' }}>Property not available in the selected dates!!!</h4> : null}
                    <div className="addproperty">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-2 mt-4 signup-form-group">
                                <Form.Field>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <label>Property title:</label>
                                        </div>
                                        <div className="col-md-5">
                                            <input
                                                className="form-control form-field"
                                                type="text"
                                                name="title"
                                                id="title"
                                                disabled
                                                value={property.title}
                                                placeholder="Property title"

                                            />
                                        </div>
                                    </div>
                                </Form.Field>

                            </div>

                            <div className="form-group mb-2 mt-4 signup-form-group">
                                <Form.Field>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <label>Guest Email</label>
                                        </div>
                                        <div className="col-md-5">
                                            <input
                                                className="form-control form-field"
                                                type="text"
                                                name="title"
                                                id="title"
                                                disabled
                                                value={user.emailId}
                                                placeholder="Property title"

                                            />
                                        </div>
                                    </div>
                                </Form.Field>

                            </div>


                            <div className="form-group mb-2 mt-4 signup-form-group">
                                <Form.Field>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <label>Guests</label>
                                        </div>
                                        <div className="col-md-5">
                                            <input
                                                className="form-control form-field"
                                                type="number"
                                                name="guests"
                                                id="guests"
                                                min={1}
                                                placeholder="maximum of 2 guests allowed per room"
                                                {...register("guests", { required: true })}
                                            />
                                        </div>
                                    </div>
                                </Form.Field>
                                {errors.guests && <p className="reserve-errors">This field is required</p>}
                            </div>

                            <div className="form-group mb-2 mt-4 signup-form-group">
                                <Form.Field>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <label>Check In</label>
                                        </div>
                                        <div className="col-md-5">
                                            <input
                                                className="form-control form-field"
                                                type="date"
                                                name="checkIn"
                                                id="checkIn"
                                                {...register("checkIn", { required: true })}
                                            />
                                        </div>
                                    </div>
                                </Form.Field>
                                {errors.checkIn && <p className="reserve-errors">This field is required</p>}
                            </div>

                            <div className="form-group mb-2 mt-4 signup-form-group">
                                <Form.Field>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <label>Check Out</label>
                                        </div>
                                        <div className="col-md-5">
                                            <input
                                                className="form-control form-field"
                                                type="date"
                                                name="checkOut"
                                                id="checkOut"
                                                {...register("checkOut", { required: true })}
                                            />
                                        </div>
                                    </div>
                                </Form.Field>
                                {errors.checkOut && <p className="reserve-errors">This field is required</p>}
                            </div>

                            <div className="text-lg-start mt-4 pt-2">
                                <Button type="submit" className="btn loginButton">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>


    );
}

export default AddReservation;
