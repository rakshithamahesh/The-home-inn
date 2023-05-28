import '../main.css';
function Header() {
    let url = " ";

    function handleSignout(){
        localStorage.clear();
    }

    return (
        <header>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* Toggle Button */}
                <button type="button" id="sidebarCollapse" className="btn btn-toggle">
                    <i className="fas fa-align-left"></i>
                </button>
                <button className="btn btn-toggle d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-align-justify"></i>
                </button>

                {/* Navbar Items */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav justify-content-end ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href='/home'>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={url}>Contact</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href={url} id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Account
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href={url}>My Profile</a></li>
                                {/* <li><a className="dropdown-item" href={url}>Login/Sign Up</a></li> */}
                                <li><a className="dropdown-item" onClick={handleSignout} href="/">Sign Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;