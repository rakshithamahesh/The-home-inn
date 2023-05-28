import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "../main.css";

import Footer from './Footer';
import Header from './Header';

import Sidemenu from './Sidemenu';
import { useNavigate } from "react-router-dom";

function AddProperty() {

  const userString = localStorage.getItem("user")
  const user = JSON.parse(userString)

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    var formdata = new FormData();
    // formdata.append('imgSrc', data.img[0]);


    console.log(data)
    const input = {
      hostId: user._id, title: data.title, description: data.description, nightlyFee: data.nightlyFee,
      serviceFee: data.serviceFee, cleaningFee: data.cleaningFee, amenities: data.amenities,
      bedRooms: data.bedrooms, guests: data.guests, availabilityFrom: data.availabilityFrom,
      availabilityTo: data.availabilityTo, propertyType: data.propertyType, address: { city: data.city, state: data.state, country: data.country }
    };
    console.log(input)

    fetch('properties', {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(input)
    })
      .then(res => {
        if (!res.ok) {
        } else {
          return res.json()
        }
      }).then((data) => {
        console.log(data)
        navigate('/home')
      })

  };


  return (
    <div>

      <div>

        <div className="wrapper">

          <Sidemenu></Sidemenu>

          <div id="content">

            <Header></Header>



            <h1 className="popular-property">Add your property</h1>
            <div className="addproperty">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>Property title</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="text"

                          name="title"
                          id="title"
                          placeholder="Property title"
                          {...register("title", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.title && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>Description</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="text"

                          name="description"
                          id="description"
                          placeholder="Description"
                          {...register("description", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.description && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>Upload property Images</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="file"

                          name="img"
                          id="img"
                          accept="image/jpg"
                          {...register("img", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.img && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>Property Type</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="text"

                          name="propertyType"
                          id="propertyType"
                          placeholder="Property type"
                          {...register("propertyType", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.propertyType && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>City</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="text"
                          name="city"
                          id="city"
                          placeholder="Enter city name"
                          {...register("city", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.city && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>State</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="text"
                          name="state"
                          id="state"
                          placeholder="Enter state name"
                          {...register("state", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.state && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>Country</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="text"
                          name="country"
                          id="country"
                          placeholder="Enter country name"
                          {...register("country", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.country && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>Nightly Fees</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="number"

                          name="nightlyFee"
                          id="nightlyFee"
                          placeholder="in USD"
                          {...register("nightlyFee", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.nightlyFee && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>Service Fees</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="number"

                          name="serviceFee"
                          id="serviceFee"
                          placeholder="in USD"
                          {...register("serviceFee", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.serviceFee && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>Cleaning Fees</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="number"

                          name="cleaningFee"
                          id="cleaningFee"
                          placeholder="in USD"
                          {...register("cleaningFee", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.cleaningFee && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>Amenities</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="text"

                          name="amenities"
                          id="amenities"
                          placeholder="eg. Swimming Pool, Free Parking, etc."
                          {...register("amenities", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.amenities && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>Bedrooms</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="number"

                          name="bedrooms"
                          id="bedrooms"
                          placeholder="no. of bedrooms"
                          {...register("bedrooms", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.bedrooms && <p>This field is required</p>}
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
                          placeholder="maximum of guests allowed per room"
                          {...register("guests", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.guests && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>Available from</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="date"

                          name="availabilityFrom"
                          id="availabilityFrom"
                          placeholder="Property title"
                          {...register("availabilityFrom", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.availabilityFrom && <p>This field is required</p>}
                </div>

                <div className="form-group mb-2 mt-4 signup-form-group">
                  <Form.Field>
                    <div className="row">
                      <div className="col-md-7">
                        <label>Available to</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="date"

                          name="availabilityTo"
                          id="availabilityTo"
                          placeholder="Property title"
                          {...register("availabilityTo", { required: true })}
                        />
                      </div>
                    </div>
                  </Form.Field>
                  {errors.availabilityTo && <p>This field is required</p>}
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
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AddProperty;
