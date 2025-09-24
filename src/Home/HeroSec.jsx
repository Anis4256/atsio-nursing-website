import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import the Carousel component from react-bootstrap
import { useNavigate } from 'react-router-dom';
import img1 from "../img/Slide1.JPG";
import img2 from "../img/Slide2.JPG";
import img3 from "../img/Slide3.JPG";
import img4 from "../img/Slide5.JPG";
import "./Hero.css";

function HeroSec() {
    const navigate = useNavigate();

    const handleEnquireClick = () => {
        navigate('/contact');
    };

    return (
        <section id="hero" className="d-flex justify-content-center align-items-center position-relative">
            {/* Preload images for faster loading */}
            <link rel="preload" href={img1} as="image" />
            <link rel="preload" href={img2} as="image" />
            <link rel="preload" href={img3} as="image" />
            <link rel="preload" href={img4} as="image" />

            <Carousel interval={3000} pause="hover"> {/* interval for auto-slide (3 seconds) */}
                <Carousel.Item>
                    <img src={img4} className="d-block w-100" alt="First slide" loading="lazy" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img1} className="d-block w-100" alt="Second slide" loading="lazy" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} className="d-block w-100" alt="Third slide" loading="lazy" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} className="d-block w-100" alt="Fourth slide" loading="lazy" />
                </Carousel.Item>
            </Carousel>

            <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center">
                <h1 className="hero-headline">Join ATS Nursing College – Excellence in Nursing Education</h1>
                <div className="hero-cta-buttons mt-4">
                    <button className="btn btn-secondary btn-lg mx-2" onClick={handleEnquireClick}>Enquire</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSec;
