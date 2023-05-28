import Moment from "react-moment";

const DetailsSection = ({ property }) => {

    return (
        <section>
            <div className="container-fluid h-custom">

                <div className="row d-flex justify-content-center align-items-center">
                    <p className="card-text property-desc"><b>Description - </b> {property.description}</p>
                    <div className="col-md-8 col-lg-6 col-xl-5 d-flex justify-content-center">

                        <div className="card-body">
                            <p className="card-text"><b>Location -</b> {property.address.city}, {property.address.state}</p>
                            <p className="card-text"><b>Rates from -</b> {property.nightlyFee}$ per night.</p>
                            <p className="card-text"><b>Accommodates - </b> {property.guests} guests</p>
                            <p className="card-text"><b>Property Type - </b> {property.propertyType}</p>
                            <p className="card-text"><b>No. of Bedrooms - </b> {property.bedrooms}</p>

                        </div>

                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">


                        <div className="card-body">

                            <p className="card-text"><b>Availibility - </b> <Moment format="MM/DD/YYYY">{property.availabilityFrom}</Moment> to <Moment format="MM/DD/YYYY">{property.availabilityTo}</Moment></p>
                            <p className="card-text"><b>Amenities - </b> {property.amenities}</p>
                            <p className="card-text"><b>Service Fees - </b> {property.serviceFee}$ per night</p>
                            <p className="card-text"><b>Cleaning Fees - </b> {property.cleaningFee}$ per night</p>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    );
}

export default DetailsSection