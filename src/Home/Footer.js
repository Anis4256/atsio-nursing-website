import React, { useState } from 'react'
import footerLogo from '../img/logo.png'
import './Footer.css'
import emailjs from "@emailjs/browser";
function Footer() {
    let style1 = {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    }
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false); // To track loading state
    const [isDisabled, setIsDisabled] = useState(false); // To disable the form after submission

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        setIsDisabled(true); // Disable the form

        const serviceID = "service_80lby3p";
        const templateID = "template_89euouo";
        const userID = "w2SRO7_35r5zYdL3l";

        const templateParams = {
            name: fname,
            email: email,
            subject: subject,
            message: msg,
        };

        emailjs
            .send(serviceID, templateID, templateParams, userID)
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Message sent successfully!");
                    setLoading(false); // Stop loading
                    setIsDisabled(false); // Re-enable the form in case of failure
                },
                (error) => {
                    console.error("FAILED...", error);
                    alert("Failed to send the message. Please try again.");
                    setLoading(false); // Stop loading
                    setIsDisabled(false); // Re-enable the form in case of failure
                }
            );
    };

    return <>
        < footer id="footer" >

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <div className="text-center">
                                <img src={footerLogo} width="150px" height="150px" alt="" />
                            </div><br />
                            <p>
                                <strong>Shri Ambabai Talim Sanstha's Institutes Of Nursing, Miraj<br /></strong> Tilak Nagar, Miraj-Sangli Road,<br />
                                Post-Wanlesswadi, Miraj, Dist: Sangli - Pin-416410. <br /><br />
                                <strong>Phone:</strong>
                                <p style={style1}> +91 9049512830 /
                                    7767058662 </p><br />

                                <strong>Email:</strong> principal@atsionursing.org
                                <br />
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Map</h4>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1909.405041311592!2d74.62401957116417!3d16.835775197882693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc122823be19b5f%3A0x2914fdb99d291f7f!2sSBGI%2C%20Miraj!5e0!3m2!1sen!2sin!4v1726661949321!5m2!1sen!2sin"
                                width="300" height="250" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="/">Home</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="/about">About us</a>
                                </li>
                                <li><i className="bi bi-chevron-right"></i> <a href="/gallery">Gallery</a>
                                </li>
                                <li><i className="bi bi-chevron-right"></i><a href="/course">Course</a></li>
                                <li><i className="bi bi-chevron-right"></i><a href="/contact">Contact</a></li>
                            </ul>
                        </div>


                        <div className="col-lg-3 mt-5 mt-lg-0">
                            <h3>Any Queries Let Me Know!!</h3>
                            <br />
                            <form onSubmit={handleSubmit} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={(e) => { setFname(e.target.value) }} required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" onChange={(e) => { setSubject(e.target.value) }} placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" onChange={(e) => { setMsg(e.target.value) }} placeholder="Message" required></textarea>
                                </div>


                                <div className="text-center">
                                    <button type='submit' id="btn" className='btn-get-started' disabled={loading || isDisabled}>
                                        {loading ? (
                                            <div className="spinner-border spinner-border-sm text-dark" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        ) : (
                                            "Send Message"
                                        )} </button>

                                </div>
                            </form>

                        </div>

                    </div>
                </div>


                <div className="container d-md-flex py-4" >

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>ATSIONursing</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by <a href="https://cybersoftdev.com">cybersoftdev</a>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer >

    </>
}

export default Footer;