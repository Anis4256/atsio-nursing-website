import React from 'react';
import imgclassroom from "../img/classroom.jpg";
import './facilities.css';

function Classrooms() {
    return (
        <>
            <section id="top" className="d-flex justify-content-center align-items-center">
                <div className="toptext container text-center position-relative facilities-header">
                    <div className="toptext">
                        <h1>Classrooms</h1>
                        <h2>State-of-the-art classrooms equipped with modern teaching aids and technology.</h2>
                        <ol className="breadcrumb d-flex justify-content-center mb-1 wow fadeInDown" data-wow-delay="0.3s">
                            <li ><a href="/">Home / </a> </li>
                            <li ><a href="#">Facilities / </a></li>
                            <li className="active"><a href="/classrooms">Classrooms</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <div className="container section-title" data-aos="fade-up">
                <h2>Classrooms</h2>
                <p>Classroom Details</p>
            </div>
            <br></br>

            <div className="container facilities-container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-5 order-1 order-lg-2" data-aos-anchor-placement="center-bottom">
                        <img src={imgclassroom} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <p className="fst-italic">Our classrooms are designed to provide a conducive learning environment, equipped with modern teaching aids and technology.</p>
                        <p>The Sanjay Bhokare College of Nursing classrooms are well-equipped with facilities that include:</p>
                        <ul>
                            <li><i className="bi bi-check-circle"></i> Modern Audio-Visual Equipment</li>
                            <li><i className="bi bi-check-circle"></i> Comfortable Seating and Furniture</li>
                            <li><i className="bi bi-check-circle"></i> Whiteboards and Markers for Interactive Learning</li>
                            <li><i className="bi bi-check-circle"></i> Internet Connectivity and Computer Systems</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Classrooms;
