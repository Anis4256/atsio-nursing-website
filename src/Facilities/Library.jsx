import React from 'react';
import imglogo from "../img/1.jpg";
import './facilities.css';

function Library() {
    return <>
        <section id="top" className="d-flex justify-content-center align-items-center">
            <div className="toptext container text-center position-relative facilities-header">
                <div className='toptext'>
                    <h1>Library</h1>
                    <h2>A vast collection of books, journals, and digital resources to support your academic journey.</h2>
                    <ol className="breadcrumb d-flex justify-content-center mb-1 wow fadeInDown" data-wow-delay="0.3s">
                        <li ><a href="/">Home / </a> </li>
                        <li ><a href="#">Facilities / </a></li>
                        <li className='active'><a href="/library">Library</a></li>
                    </ol>
                </div>
            </div>
        </section>
        <div className="container section-title" data-aos="fade-up">
            <h2>Library</h2>
            <p>Library Details</p>
        </div>
        <br></br>

        <div className="container facilities-container" data-aos="fade-up">
            <div className="row">
                <div className="col-lg-5 order-1 order-lg-2" data-aos-anchor-placement="center-bottom">
                    <img src={imglogo} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <p className="fst-italic">A treasure trove of knowledge, providing students with access to a vast collection of books, journals, and digital resources.</p>
                    <p>The Sanjay Bhokare College of Nursing library is well-equipped with modern facilities, including online access to international journals and databases, comfortable reading areas and study spaces, and computer systems with internet connectivity.</p>
                    <ul>
                        <li><i className="bi bi-check-circle"></i> Vast Collection of Nursing Books and Journals</li>
                        <li><i className="bi bi-check-circle"></i> Online Access to International Journals and Databases</li>
                        <li><i className="bi bi-check-circle"></i> Comfortable Reading Areas and Study Spaces</li>
                        <li><i className="bi bi-check-circle"></i> Computer Systems with Internet Connectivity</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Library;
