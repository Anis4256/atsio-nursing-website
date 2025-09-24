import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css'; // Import the CSS file for styling

function Contact() {
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

    return (
        <>
            <section id="top" className="d-flex justify-content-center align-items-center " >
                <div className="contact-text container text-center position-relative">
                    <div className='contact-text'>
                        <h1>Contact Us</h1>
                        <h2>Get in Touch with Sanjay Bhokare College of Nursing</h2>
                        <p style={{ color: "#ffdfdf" }}>We'd love to hear from you. Whether you have questions or just want to know more about our programs, we're here to help.</p>
                        <ol className="breadcrumb d-flex justify-content-center mb-1 wow fadeInDown" data-wow-delay="0.3s">
                            <li><a href="/">Home / </a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ol>
                    </div>
                </div>

            </section>
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact Details</h2>
                <p>Contact Us</p>
            </div>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control border-0 bg-light px-4"
                                            placeholder="Your Name"
                                            style={{ height: "55px" }}
                                            value={fname}
                                            onChange={(e) => setFname(e.target.value)}

                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            className="form-control border-0 bg-light px-4"
                                            placeholder="Your Email"
                                            style={{ height: "55px" }}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="form-control border-0 bg-light px-4"
                                            placeholder="Subject"
                                            style={{ height: "55px" }}
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            className="form-control border-0 bg-light px-4 py-3"
                                            rows="4"
                                            placeholder="Message"
                                            value={msg}
                                            onChange={(e) => setMsg(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button
                                            className="btn btn-danger w-100 py-3"
                                            type="submit"
                                            disabled={loading || isDisabled} // Disable button while loading
                                        >
                                            {loading ? (
                                                <div className="spinner-border spinner-border-sm text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                            <iframe
                                className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d742.1760427034468!2d74.62421498026794!3d16.835920372439514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc122823be19b5f%3A0x2914fdb99d291f7f!2sSBGI%2C%20Miraj!5e0!3m2!1sen!2sin!4v1729536641683!5m2!1sen!2sin"
                                frameBorder="0"
                                style={{ minHeight: "350px", border: "0" }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
