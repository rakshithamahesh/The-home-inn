import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "../main.css";
import { useState } from "react";
import Footer from './Footer';
import Header from './Header';

import Sidemenu from './Sidemenu';
import { useNavigate } from "react-router-dom";

function UpdateProperty() {
  const [success, setSuccess] = useState(false);

  const stringData = localStorage.getItem('propertytoupdate')

  const [property, setProperty] = useState(JSON.parse(stringData));
  const [description, setDescription] = useState(property.description);
  const [nightlyFee, setNightlyFee] = useState(property.nightlyFee);
  const [serviceFee, setServiceFee] = useState(property.serviceFee);
  const [cleaningFee, setCleaningFee] = useState(property.cleaningFee);
  const [amenities, setAmenities] = useState(property.amenities);
  const [bedrooms, setBedrooms] = useState(property.bedrooms);
  const [availabilityFrom, setAvailabilityFrom] = useState(property.availabilityFrom);
  const [availabilityTo, setAvailabilityTo] = useState(property.availabilityTo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {



    const input = {
      description: description, nightlyFee: data.nightlyFee,
      serviceFee: serviceFee, cleaningFee: cleaningFee, amenities: amenities,
      bedRooms: bedrooms, availabilityFrom: availabilityFrom,
      availabilityTo: availabilityTo
    };
    console.log(input)

    fetch(`properties/${property._id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'PATCH',
      body: JSON.stringify(input)
    })
      .then(res => {
        if (!res.ok) {
          console.log("Some Error")
          setSuccess(false)
        } else {
          console.log("Done!!")
          setSuccess(true)
          return res.json()
        }
      }).then((data) => {

      })


  };

  return (
    <div>

      <div>

        <div className="wrapper">

          <Sidemenu></Sidemenu>

          <div id="content">

            <Header></Header>



            <h1 className="popular-property">Update {property.title}</h1>
            {(success) === true ? <h4 className="success">Your Property was updated successfully!!</h4> : null}
            <div className="addproperty">
              <Form onSubmit={handleSubmit(onSubmit)}>


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
                          onChange={(e) => setDescription(e.target.value)}
                          name="description"
                          id="description"
                          defaultValue={description}
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
                        <label>Nightly Fees</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="number"
                          onChange={(e) => setNightlyFee(e.target.value)}
                          defaultValue={nightlyFee}
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
                          defaultValue={serviceFee}
                          onChange={(e) => setServiceFee(e.target.value)}
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
                          defaultValue={cleaningFee}
                          onChange={(e) => setCleaningFee(e.target.value)}
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
                          defaultValue={amenities}
                          onChange={(e) => setAmenities(e.target.value)}
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
                          defaultValue={bedrooms}
                          onChange={(e) => setBedrooms(e.target.value)}
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
                        <label>Available from</label>
                      </div>
                      <div className="col-md-5">
                        <input
                          className="form-control form-field"
                          type="date"
                          defaultValue={availabilityFrom}
                          onChange={(e) => setAvailabilityFrom(e.target.value)}
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
                          defaultValue={availabilityTo}
                          onChange={(e) => setAvailabilityTo(e.target.value)}
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
                    Update
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

export default UpdateProperty;
