import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "../main.css";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const [isHost, setIsHost] = useState(false)
  const [error, setError] = useState(false)
  var isError = false;

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {


    const input = { emailId: data.email, password: data.password, firstName: data.firstName, lastName: data.lastName, mobileNo: data.phone, isHost: isHost };
    fetch("user/signup", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(input),
      method: 'POST'
    })
      .then(res => {

        if (!res.ok) {

          setError(true);
          isError = true
        } else {
          setError(false)
          isError = false
          return res.json()
        }
      })
      .then((data) => {
        if (!error) {
          localStorage.setItem("user", JSON.stringify(data))

          navigate("/home")
        }
      })
  };
  return (
    <div className="container mt-5 signup-form">
      <img src="images/logo.jpg" className="img-fluid" alt="Logo" />
      <Form onSubmit={handleSubmit(onSubmit)}>

        {(error) === true ? <h4 className="error">Please Signup Again</h4> : null}
        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <label>First Name:</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder="First Name"
              {...register("firstName", { required: true })}
            />
          </Form.Field>
          {errors.firstName && <p className="field-errors">This field is required</p>}
        </div>

        <div className="form-group mb-2 signup-form-group">
          <Form.Field>
            <label>Last Name:</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
            />
          </Form.Field>
          {errors.lastName && <p className="field-errors">This field is required</p>}
        </div>

        <div className="form-group mb-2 signup-form-group">
          <Form.Field>
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, })}
            />
          </Form.Field>
          {errors.email && <p className="field-errors">This field is required</p>}
        </div>

        <div className="form-group mb-2 signup-form-group">
          <Form.Field>
            <label>Mobile Number:</label>
            <input
              className="form-control"
              type="text"
              name="phone"
              placeholder="Mobile Number"
              {...register("phone", { required: true })}
            />
          </Form.Field>
          {errors.phone && <p className="field-errors">This field is required</p>}
        </div>
        <div className="form-group mb-2 signup-form-group">
          <Form.Field>
            <label>Password:</label>

            <input
              className="form-control"
              type="password"
              name="password"
              title="1. Atleast one uppercase letter required.
                 2. Atleast one lowercase letter required.
                 3. Atleast one number letter required.
                 4. Atleast one symbol (#,$,etc) letter required."
              placeholder="Password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />

          </Form.Field>
          {errors.password && <p className="field-errors">Please enter valid password</p>}
        </div>

        <div className="form-group mb-2 signup-form-group">
          <Form.Field>
            <input type="checkbox" checked={isHost} onChange={(e) => setIsHost(true)} id="becomeahost" name="isHost" />
            <label for="becomeahost" className="medium fw-italic mt-2 pt-1 mb-0 ml-2">Become a host</label>
          </Form.Field>
        </div>

        <div className="text-lg-start mt-4 pt-2">
          <Button type="submit" className="btn loginButton">Sign Up</Button>

          <p className="small fw-bold mt-2 pt-1 mb-0">
            Already have an account?{" "}
            <a href="/" className="link-success">
              Login
            </a>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;
