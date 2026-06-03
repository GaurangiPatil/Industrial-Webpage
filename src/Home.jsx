import { Link } from "react-router-dom";
import './CSS/Home.css'

function Home() {
    return (
        <>
            {/* hero section start */}
            <section className="hero-section d-flex align-items-center text-center text-white position-relative">
                <div className="container">
                    <h1 className="display-4 fw-bold">Welcome to ManuTech Industries</h1>
                    <p className="lead mb-5">
                    Precision Manufacturing & Smart Factory Solutions”
                    </p>
                    <Link to="/" className="check-services">
                        Check Our Services
                    </Link>
                </div>
            </section>
            {/* hero section end */}


            {/* service section start */}
            <section className="services-section py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="text-dark fw-bold">SERVICES</div>
                        <div>
                            <h2 className="fw-bold mt-2">
                                Our Core Services
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <div className="card text-center p-4 h-100 position-relative service-card ">
                                <img src="./public/IMAGES/cnc-machine.png" alt="Power" className="services-img ms-lg-5 ms-5 ms-md-2" />

                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="card text-center p-4 h-100 position-relative service-card">
                                <img src="./public/IMAGES/3d design.png" alt="Power" className="services-img  ms-lg-5 ms-5 ms-md-2" />
                                
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="card text-center p-4 h-100 position-relative service-card">
                                <img src="./public/IMAGES/metal.png" alt="Power" className="services-img ms-lg-5 ms-5 ms-md-2" />
                                
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="card text-center p-4 h-100 position-relative service-card">
                                <img src="./public/IMAGES/industrial-auto.png" alt="Power" className="services-img ms-lg-5 ms-5 ms-md-2" />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* service section end */}

            {/* planning section start */}
            <section id="planning" class="container py-5">
            <h3 class="mb-4 fw-bold">Our Planning Process</h3>
            <div class="row g-4 align-items-center">
            <div class="col-lg-6 planning">
            <img src="./public/IMAGES//planning.jpg" alt="Planning" class="img-fluid rounded shadow-sm"/>
            </div>
            <div class="col-lg-6">
            <p class="text-muted">At ManuTech, meticulous planning ensures seamless production. Every project is analyzed 
                for material, process, and timeline optimization before the first chip is cut. We rely on ERP-integrated scheduling and lean principles to deliver high efficiency.</p>
            <ul class="list">
            <li>Project requirement analysis & feasibility</li>
            <li> Resource allocation &  timeline definition</li>
            <li> Material procurement and vendor coordination</li>
            <li> Production flow & risk management</li>
            <li> Continuous monitoring and improvement</li>
            </ul>
            <a href="#contact" class="btn btn-dark mt-2">Start Planning With Us</a>
            </div>
        </div>
        </section>
            {/* planning section end */}

        {/* testimonial section start */}
        <section id="testimonials" className="container py-5">
        <h3 className="mb-4 fw-bold">What Our Clients Say</h3>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <div className="row justify-content-center">
        <div className="col-md-8">
        <div className="testimonial p-4 text-center">
    <img src="./public/IMAGES/carosul-2.jpg"/>
        <p className="mb-2 mt-4">"ManuTech delivered a flawless production run on a tight schedule. Their quality control and communication were outstanding."</p>
        <h6 className="mb-0">Priya Sharma</h6>
        <small className="text-muted">Procurement Manager, AeroDynamics Ltd.</small>
        </div>
        </div>
        </div>
        </div>
        <div className="carousel-item">
        <div className="row justify-content-center">
        <div className="col-md-8">
        <div className="testimonial p-4 text-center">
        <img src="./public/IMAGES/carousel-3.jpg"/>
        <p className="mb-2 mt-4">"High-volume delivery with consistent quality. Their JIT supply helped us reduce inventory costs."</p>
            <h6 className="mb-0">Carlos Mendes</h6>
            <small className="text-muted">Supply Chain Lead, AutoMotiveCo</small>
            </div>
                </div>
                    </div>
            </div>
            <div className="carousel-item">
            <div className="row justify-content-center">
            <div className="col-md-8">
            <div className="testimonial p-4 text-center">
                <img src="./public/IMAGES/carosul-1.jpg"/>
            <p classNames="mb-2">"Excellent prototyping service — helped our design get to market faster with no surprises."</p>
            <h6 className="mb-0">Dr. Neha Iyer</h6>
            <small className="text-muted">R&D Manager, MedTech Innovations</small>
            </div>
            </div>
            </div>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" ></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" ></span>
            <span className="visually-hidden">Next</span>
                    </button>
            </div>
            </section>
            {/* testimonial section end */}

            {/* help section start */}
            <section className="help-section text-white d-flex align-items-center bg-dark">
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start py-5">
                    <div className="mb-4 mb-md-0">
                        <h3 className="fw-bold">Any help needed?</h3>
                        <p className="lead fs-6">
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
                        </p>
                    </div>
                    <div>
                        <Link to="/" className="contact-btn btn btn-light">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>


             {/* cocntact section start */}
            <section id="contact" class="container py-5">
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <h4>Get in touch</h4>
                        <p class="text-muted">Tell us about your project and we'll respond within 1 business day.</p>
                        <ul class="list-unstyled">
                        <li><strong>Address:</strong> 112 Industrial Park, Pune, India</li>
                            <li><strong>Email:</strong> technology@industry.com</li>
                            <li><strong>Phone:</strong> +10 (78) 675-9064</li>
                            </ul>
                            </div>
                            <div class="col-lg-6">
                                <form>
                                <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control" placeholder="Your name"/>
                                </div>
                                <div class="mb-3">
                                <label class="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder="you@company.com"/>
                                    </div>
                                    <div class="mb-3">
                                    <label class="form-label">Message</label>
                                    <textarea class="form-control" rows="4" placeholder="Project details, volumes, timeline..."></textarea>
                                    </div>
                                    <button class="btn btn-dark">Send Message</button>
                                    </form>
                                    </div>
                                    </div>
                                    </section>
                                    {/* cocntact section end */}

                                    {/* footer start */}
                                    <footer class="py-4 mt-5 container-fluid">
                                    <div class="container-fluid d-flex justify-content-between align-items-center">
                                    <div>
                                    <strong>ManuTech</strong>
                                    <div class="text-muted small">© <span id="yr"></span> All rights reserved.</div>
                                    </div>
                                    <div>
                                        <a href="#" class="text-muted text-decoration-none me-3">Privacy</a>
                                        <a href="#" class="text-muted text-decoration-none">Terms</a>
                                    </div>
                                    </div>
                                    </footer>
                             {/* footer end */}

        </>
    )
}

export default Home;
