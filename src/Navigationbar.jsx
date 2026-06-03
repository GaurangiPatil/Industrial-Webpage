import { Link } from "react-router-dom";

const Navigationbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src="./public/IMAGES/company-logo (2).png" alt="Logo" className=" img-fluid logo-img" height={100} width={200}/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse w-100" id="navbarNav">
                        <ul className="navbar-nav gap-3 ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-medium" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-medium" to="/services">Services</Link>
                            </li>
                        <li className="nav-item">
                                <Link className="nav-link text-dark fw-medium" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-medium" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item mb-4 mb-lg-0">
                                <Link className="nav-link text-dark fw-medium" to="/search">
                                    <i className="bi bi-search"></i>
                                </Link>
                            </li>
                        </ul>

                        <Link className="get-qoute-btn ms-lg-4" to="/quote">
                            Get Free Quote
                        </Link>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Navigationbar;
