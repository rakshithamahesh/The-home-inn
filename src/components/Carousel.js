import '../main.css';

function Carousel() {
    return (

        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-interval="3000" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/property2.jpg" className="d-block img-fluid carousel-image"
                        alt="Sorry! Preview not available right now" />
                </div>
                <div className="carousel-item">
                    <img src="images/property3.jpg" className="d-block img-fluid carousel-image"
                        alt="Sorry! Preview not available right now" />
                </div>
                <div className="carousel-item">
                    <img src="images/property4.jpg" className="d-block img-fluid carousel-image"
                        alt="Sorry! Preview not available right now" />
                </div>
                <div className="carousel-item">
                    <img src="images/property5.jpg" className="d-block img-fluid carousel-image"
                        alt="Sorry! Preview not available right now" />
                </div>
                <div className="carousel-item">
                    <img src="images/property6.jpg" className="d-block img-fluid carousel-image"
                        alt="Sorry! Preview not available right now" />
                </div>
                <div className="carousel-item">
                    <img src="images/property7.jpg" className="d-block img-fluid carousel-image"
                        alt="Sorry! Preview not available right now" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export default Carousel;