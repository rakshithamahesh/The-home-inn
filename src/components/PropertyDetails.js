import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetailsSection from "./DetailsSection";
import Footer from './Footer';
import Header from './Header';
import ReviewCards from "./ReviewCards";
import Sidemenu from './Sidemenu';


function PropertyDetails() {


    const [showRatings, setShowRatings] = useState(true);
    const stringData = localStorage.getItem("property")
    const property = JSON.parse(stringData);

    const StringReviews = localStorage.getItem("reviews")
    const reviews = JSON.parse(StringReviews);
    const navigate = useNavigate();
    useEffect(() => {
        if (reviews.length === 0) {
            setShowRatings(false)
        } else {
            setShowRatings(true)
        }
    }, []);


    function handleSubmit() {
        navigate("/addreservation")
    }



    return (
        <div>
            <div>
                <div className="wrapper">
                    <Sidemenu></Sidemenu>
                    <div id="content">
                        <Header></Header>
                        <h1 className="popular-property">{property.title}</h1>
                        <div className="property-image">
                            <img src={property.imgSrc} alt="Unable to Load"></img>
                        </div>
                        <h1 className="popular-property">Property Details</h1>
                        <DetailsSection property={property}></DetailsSection>

                        {(showRatings) ? <h1 className="popular-property">Reviews about the Property</h1> : null}
                        {(showRatings) ? <ReviewCards reviews={reviews}></ReviewCards> : null}

                        <br></br>
                        <div className="d-flex justify-content-center">
                            <button onClick={handleSubmit} className="btn btn-lg"> Reserve this Property</button>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>




        </div>

    );
}

export default PropertyDetails