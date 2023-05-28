import '../main.css';
import React from "react";
import PropertyCard from './PropertyCard'


const Properties = ({ properties, isFavorite }) => {


    return (

        <div className='row'>
            {
                properties.map((property) => {

                    return <PropertyCard property={property} isFavourite={isFavorite}></PropertyCard>

                }
                )}
            <br></br>
        </div>

    );
}

export default Properties;