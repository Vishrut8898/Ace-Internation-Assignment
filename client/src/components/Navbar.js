import React from 'react'

const Navbar = () => {
    const url = '#'
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light text-dark bg-light">
                <div className="container">
                    <a href={url} className="navbar-brand fw-bold text-dark">Ace International</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto mt-sm-4 mt-md-0">
                            <li className="nav-item">
                                <a href={url} className="nav-link text-dark">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href={url} className="nav-link text-dark">About</a>
                            </li>
                            <li className="nav-item">
                                <a href={url} className="nav-link text-dark">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a href={url} className="nav-link text-dark">Sign-In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
