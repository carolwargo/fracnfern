import React from "react";  
import BG from '../assets/BG.png';

const Homepage = () => {
    return (
        <div>
            <header style={{backgroundImage: `url(${BG})`}}>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg bg-body fixed-top">
                    <div className="container-fluid">
                        <button
                            data-mdb-collapse-init
                            className="navbar-toggler"
                            type="button"
                            data-mdb-target="#navbarExample01"
                            aria-controls="navbarExample01"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarExample01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Navbar */}

                {/* Jumbotron */}
                <div className="p-5 text-center bg-body-tertiary" style={{marginTop: "58px"}}>
                    <h1 className="mb-3">Heading</h1>
                    <h4 className="mb-3">Subheading</h4>
                    <a data-mdb-ripple-init className="btn btn-primary" href="/" role="button">Call to action</a>
                </div>
                {/* Jumbotron */}
            </header>
        </div>
    );
}

export default Homepage;
