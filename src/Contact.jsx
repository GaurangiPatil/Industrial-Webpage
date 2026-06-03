import { Link } from "react-router-dom";
import './CSS/Contact.css'

function Contact() {
    return (
        <>
            {/* contact bg section start */}
            <section className="contact-bg d-flex align-items-center justify-content-center">
                <h1 className="text-white fw-bold">Contact Us</h1>
            </section>
            {/* contact bg section end */}


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
                                    <footer class="py-4 mt-5">
                                    <div class="container d-flex justify-content-between align-items-center">
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

export default Contact;
