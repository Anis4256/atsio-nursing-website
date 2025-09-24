import React from 'react';
import team1 from '../img/HomeImg1.jpg'
import team2 from '../img/HomeImg2.jpg'


import './Lightbox.css'

function Lightbox() {

    return <>
        <div className="photo-gallery">
            <div className="container">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2 style={{ marginTop: "3px", marginBottom: "0px" }}>Courses</h2>
                        <p>Popular Courses</p>
                    </div>
                </div>
                <div className="row photos">
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><a href={team2} data-lightbox="photos"><img className="img-fluid"
                        src={team2} /></a></div>
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><a href={team2} data-lightbox="photos"><img className="img-fluid"
                        src={team2} /></a></div>
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><a href={team2} data-lightbox="photos"><img className="img-fluid"
                        src={team2} /></a></div>
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><a href={team2} data-lightbox="photos"><img className="img-fluid"
                        src={team2} /></a></div>
                </div>
            </div>
        </div>

    </>

}
export default Lightbox;