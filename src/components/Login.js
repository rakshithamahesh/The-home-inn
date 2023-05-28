import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    var iserror = false;
    // let history = useHistory();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = { emailId: email, password: pass };
        fetch("user/login", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(input),
            method: 'POST'
        })
            .then(res => {

                if (res.ok) {

                    setError(false)
                    iserror = false;
                    return res.json()

                } else {
                    iserror = true;
                    setError(true);
                    setEmail('');
                    setPass('');
                }
            })
            .then((data) => {

                localStorage.setItem("user", JSON.stringify(data));

                if (iserror) {
                } else {
                    navigate("/home");
                }


            });
    }

    return (

        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="images/logo.jpg"
                            className="img-fluid" alt="Seems to be a problem" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit} >
                            <h1 className="text-secondary">Login to your Account</h1>

                            {(error) === true ? <h4 className="error">You have entered wrong credentials</h4> : null}
                            <div className="form-group mb-4 mt-4">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="form-control form-control-lg" placeholder="Enter a valid email address" />

                            </div>


                            <div className="form-group mb-3">
                                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="password" className="form-control form-control-lg"
                                    placeholder="Enter password" />

                            </div>

                            <div className="text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn loginButton">Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                                    className="link-success">Signup</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Login; 