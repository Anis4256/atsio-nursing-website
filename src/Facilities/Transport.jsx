import React from 'react';
import imgtransport from "../img/transport.jpg";
import './facilities.css';

function Transport() {
    return (
        <>
            <section id="top" className="d-flex justify-content-center align-items-center">
                <div className="toptext container text-center position-relative facilities-header">
                    <div className="toptext">
                        <h1>Transport</h1>
                        <h2>A safe and convenient transportation system, connecting students to the college and surrounding areas.</h2>
                        <ol className="breadcrumb d-flex justify-content-center mb-1 wow fadeInDown" data-wow-delay="0.3s">
                            <li ><a href="/">Home / </a> </li>
                            <li ><a href="#">Facilities / </a></li>
                            <li className="active"><a href="/transport">Transport</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <div className="container section-title" data-aos="fade-up">
                <h2>Transport</h2>
                <p>Transport Details</p>
            </div>
            <br></br>

            <div className="container facilities-container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-5 order-1 order-lg-2" data-aos-anchor-placement="center-bottom">
                        <img src={imgtransport} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <p className="fst-italic">Our transportation system provides a safe and convenient way for students to travel to and from the college.</p>
                        <p>The Sanjay Bhokare College of Nursing transport facilities include:</p>
                        <ul>
                            <li><i className="bi bi-check-circle"></i> A Fleet of Buses and Vans for Daily Transportation</li>
                            <li><i className="bi bi-check-circle"></i> Routes Covering Major Areas of the City</li>
                            <li><i className="bi bi-check-circle"></i> Experienced and Trained Drivers</li>
                            <li><i className="bi bi-check-circle"></i> Safety and Security Measures in Place</li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Transport;
