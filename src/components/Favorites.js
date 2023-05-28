import Properties from "./Properties";
import React, { useState, useEffect } from "react";
import Footer from './Footer';
import Header from './Header';
import Sidemenu from './Sidemenu';

function Favorites() {
    const [properties, setProperties] = useState([]);

    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);


    useEffect(() => {

        const inputdata = { userId: user._id }
        const getProperties = () => {
            fetch('favourites/view', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(inputdata)
            })
                .then(res => res.json())
                .then((data) => {
                    setProperties(data);
                });
        }

        getProperties()
    }, [])

    return (
        <div>
            <div className="wrapper">
                <Sidemenu></Sidemenu>
                <div id="content">
                    <Header></Header>
                    <div>
                        <h1 className="popular-property">Favorite Properties</h1>
                        <br></br>
                        {properties && <Properties properties={properties} isFavorite={true}></Properties>}

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Favorites;