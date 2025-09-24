import React from 'react';
import imghostel from "../img/hostel.png";
import './facilities.css';

function Hostel() {
    return (
        <>
            <section id="top" className="d-flex justify-content-center align-items-center">
                <div className="toptext container text-center position-relative facilities-header">
                    <div className="toptext">
                        <h1>Hostel</h1>
                        <h2>A safe and comfortable living environment for students, with facilities that foster academic and personal growth.</h2>
                        <ol className="breadcrumb d-flex justify-content-center mb-1 wow fadeInDown" data-wow-delay="0.3s">
                            <li ><a href="/">Home / </a> </li>
                            <li ><a href="#">Facilities / </a></li>
                            <li className="active"><a href="/hostel">Hostel</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <div className="container section-title" data-aos="fade-up">
                <h2>Hostel</h2>
                <p>Hostel Details</p>
            </div>
            <br></br>

            <div className="container facilities-container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-5 order-1 order-lg-2" data-aos-anchor-placement="center-bottom">
                        <img src={imghostel} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <p className="fst-italic">Our hostel provides a safe and comfortable living environment for students, with facilities that foster academic and personal growth.</p>
                        <p>The Sanjay Bhokare College of Nursing hostel offers:</p>
                        <ul>
                            <li><i className="bi bi-check-circle"></i> Spacious and Well-Furnished Rooms</li>
                            <li><i className="bi bi-check-circle"></i> Hygienic and Clean Bathrooms and Toilets</li>
                            <li><i className="bi bi-check-circle"></i> 24/7 Security and Surveillance</li>
                            <li><i className="bi bi-check-circle"></i> Mess Facilities Providing Nutritious and Delicious Meals</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hostel;
