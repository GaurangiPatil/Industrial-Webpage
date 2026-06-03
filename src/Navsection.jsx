import { Link } from "react-router-dom";

function Navsection() {
    return (
        <section className="bg-dark text-white py-2">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-12 col-md-8 mb-2 mb-md-0">
                        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center text-center text-md-start">
                            <span className="me-md-3 mb-1 mb-md-0">+10 (78) 675-9064</span>
                            <span className="me-md-3 mb-1 mb-md-0">technology@industry.com</span>
                            <span className="">Sun - Fri (10AM - 7PM)</span>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
                        <div className="d-flex Social-icons">
                            <Link to="/" className="text-white mx-2">
                                <i className="bi bi-facebook"></i>
                            </Link>
                            <Link to="/" className="text-white mx-2">
                                <i className="bi bi-instagram"></i>
                            </Link>
                            <Link to="/" className="text-white mx-2">
                                <i className="bi bi-linkedin"></i>
                            </Link>
                            <Link to="/" className="text-white mx-2">
                                <i className="bi bi-youtube"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navsection;
