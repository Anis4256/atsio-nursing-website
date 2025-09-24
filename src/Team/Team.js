import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle'; // Make sure you are importing Swiper correctly
import 'swiper/swiper-bundle.css'
import { Committee } from "../team.js"


import './Team.css';

function Team() {

    // Initialize Swiper after component mounts
    useEffect(() => {
        new Swiper(".slide-content", {
            slidesPerView: 4,
            spaceBetween: 25,
            loop: true,
            centerSlide: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                300: {
                    slidesPerView: 2,
                },
                520: {
                    slidesPerView: 3,
                },
                950: {
                    slidesPerView: 4,
                },
            },
        });
    }, []);

    return (
        <>    <div className="container section-title" data-aos="fade-up">
            <h2>ATS SBGI</h2>
            <p>Our Management</p>
        </div>
            <div className="slide-container swiper" data-aos="fade-up">
                <div className="slide-content">
                    <div className="card-wrapper swiper-wrapper">
                        {
                            Committee.map((ele) => (
                                <div className="card swiper-slide">
                                    <div className="image-content">
                                        <span className="overlay"></span>
                                        <div className="card-image">
                                            <img src={ele.image} alt="" className="card-img" />
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <h2 className="name text-center">{ele.name}</h2>
                                        <strong>{ele.position}</strong>
                                        <p className="description">Shri Ambabai Talim Sanstha Miraj</p>
                                        {/* <button className="button">View More</button> */}
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
                <br></br>
                <div className="swiper-button-next swiper-navBtn"></div>
                <div className="swiper-button-prev swiper-navBtn"></div>
                <div className="swiper-pagination"></div>
            </div>
        </>
    );
}

export default Team;
