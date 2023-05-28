import '../main.css';

function Sidemenu() {
    let url = "";
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);

    const isHost = user.isHost;

    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3><img src="images/logo.jpg" width="200" height="70" className="d-inline-block align-top" alt="" /></h3>

                <strong><img src="images/logo2.jpg" width="50" height="60" className="d-inline-block align-top" alt="" /></strong>
            </div>

            <ul className="list-unstyled components">
                {(isHost)
                    ? <li>
                        <a className="bi bi-file-plus-fill card-icon" href='/addproperty'>&nbsp;Add a Property</a>
                    </li>
                    : <li>
                        <a className="bi bi-file-plus-fill card-icon" href="/host">&nbsp;Become a host</a>
                    </li>}

                {(isHost)
                    ? <li>
                        <a className="bi bi-gear card-icon" href="/myproperties">&nbsp;My Properties</a>
                    </li>
                    : null
                }

                <li>
                    <a className="bi bi-building card-icon" href='/reservationdetails'>&nbsp;Reservations</a>
                </li>
                <li>
                    <a className="bi bi-star card-icon" href='/favorites'>&nbsp;Favorites</a>
                </li>
            </ul>
        </nav>

    );
}

export default Sidemenu;