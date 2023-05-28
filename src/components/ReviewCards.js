const ReviewCards = ({ reviews }) => {

    return (

        <div className='row'>
            <div className="col-md-2">

            </div>
            <div className="col-md-8">
                {
                    reviews.map((review) => {
                        return (
                            <div className="card review-card">
                                <div className="card-header">
                                    {review.rating}  <i className="bi bi-star-fill"></i>
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>{review.comment}</p>

                                    </blockquote>
                                </div></div>
                        );
                    })
                }
            </div>
            <div className="col-md-2">

            </div>

        </div>


    );
}

export default ReviewCards