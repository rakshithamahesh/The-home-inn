import Carousel from "./Carousel";
import Properties from "./Properties";
import React, { useState, useEffect } from "react";

function MainBody() {

    const [properties, setProperties] = useState(null);
    const [filterText, setFilterText] = useState("");

    const userString = localStorage.getItem('user')
    const user = JSON.parse(userString)

    useEffect(() => {
        const getProperties = () => {
            fetch("properties", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    setProperties(data);
                });

            const queryParam = `userId=${user._id}`
            fetch(`reservations?${queryParam}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    localStorage.setItem('reservations', JSON.stringify(data));
                });

            const queryParam1 = `hostId=${user._id}`
            fetch(`host?${queryParam1}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    localStorage.setItem('myProperties', JSON.stringify(data));
                });
        }

        getProperties()

    }, [])

    function handleSearch(value) {
        setFilterText(value)
        const queryString = `searchParam=${value}`
        const getProperties = () => {
            fetch(`searchProperty?${queryString}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            })
                .then(res => res.json())
                .then((data) => {
                    setProperties(data);
                });
        }

        getProperties()
    }

    function SearchBar({ filterText }) {
        return (
            <div className="input-group justify-content-center">
                <div className="form-outline">
                    <input type="text" id="form1" value={filterText} onChange={(e) => handleSearch(e.target.value)} className="form-control" placeholder="Search Property by city and/or property type" />
                </div>
            </div>
        );
    }

    return (
        <div>
            <Carousel></Carousel>
            <br />
            <h1 className="popular-property">Popular Properties</h1>
            <br></br>
            <SearchBar filterText={filterText}></SearchBar>
            <br></br>

            {properties && <Properties properties={properties} isFavorite={false}></Properties>}

        </div>

    );
}

export default MainBody;