import '../main.css';
import React from "react";
import { useNavigate } from 'react-router-dom';


const PropertyCard = ({ property, isFavourite }) => {

    const navigate = useNavigate();


    function handleMoreDetails() {
        localStorage.setItem("property", JSON.stringify(property))



        const queryString = `${property._id}`
        fetch(`review/${queryString}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET',
        })
            .then(res => {
                if (!res.ok) {

                } else {
                    return res.json()
                }

            })
            .then((data) => {

                localStorage.setItem("reviews", JSON.stringify(data));
                navigate("/propertydetails")
            });

    }

    function handleAddFavorites() {

        const userString = localStorage.getItem('user');
        const user = JSON.parse(userString);
        console.log(user)
        const inputdata = { userId: user._id, propertyId: property._id }
        const getProperties = () => {
            fetch('favourites/add', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(inputdata)
            })
                .then(res => res.json())
                .then((data) => {
                    isFavourite = true
                    navigate('/favorites')
                });
        }

        getProperties()



    }
    function handleRemoveFavorites() {

        const userString = localStorage.getItem('user');
        const user = JSON.parse(userString);

        const inputdata = { userId: user._id, propertyId: property._id }
        const getProperties = () => {
            fetch('favourites/remove', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(inputdata)
            })
                .then(res => res.json())
                .then((data) => {
                    isFavourite = false
                    window.location.reload(false)
                });
        }

        getProperties()


    }

    function handleRating() {

        localStorage.setItem("property", JSON.stringify(property));

        navigate("/rateproperty")
    }

    return (
        <div className="col-md-4">
            <div className="card">
                <img src={property.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">

                    <h5 className="card-title">{property.title}</h5>

                    <br></br>
                    <p className="card-text"><b>Location -</b> {property.address.city}, {property.address.state}</p>
                    <p className="card-text"><b>Rates from -</b> {property.nightlyFee}$ per night.</p>
                    <p className="card-text"><b>Accommodates - </b> {property.guests} guests</p>
                    <p className="card-text"><b>Property Type - </b> {property.propertyType}</p>


                    <div className='d-flex'>

                        <button onClick={() => handleMoreDetails()} className="btn mx-auto">More Details</button>
                    </div>
                    <br></br>
                    <div className='d-flex'>
                        {(isFavourite) ? <button onClick={() => handleRemoveFavorites()} className="btn mx-auto">Remove from Favorites</button> :
                            <button onClick={() => handleAddFavorites()} className="btn mx-auto">Add To Favorites</button>}
                    </div>
                    <br></br>
                    <div className='d-flex'>
                        <button onClick={() => handleRating()} className="btn mx-auto">Rate Property</button>
                    </div>

                </div>
            </div>
        </div>

    );


}

export default PropertyCard;