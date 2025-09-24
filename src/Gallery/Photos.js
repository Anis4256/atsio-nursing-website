import React, { useEffect, useState } from 'react';
import './Lightbox.css';

function Lightbox() {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 8;

    useEffect(() => {
        fetch('/gallery.json')
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error('Error fetching image URL:', error));
    }, []);

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(images.length / imagesPerPage);

    const handlePrevious = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const handleNext = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (<>
        <section id="top" className="d-flex justify-content-center align-items-center">
            <div className="toptext container text-center position-relative">
                <div className='toptext'>
                    <h1>Photos</h1>
                    <h2>Visual Stories of Success
                        Explore Sanjay Bhokare College of Nursing's achievements
                        Through Our Gallery</h2>
                    <ol className="breadcrumb d-flex justify-content-center mb-1 wow fadeInDown" data-wow-delay="0.3s">
                        <li ><a href="/">Home / </a> </li>
                        <li ><a href="/gallery">Gallery / </a></li>
                        <li className='active'><a href="/gallery">Photos</a></li>
                    </ol>
                </div>
            </div>
        </section>
        <section id="popular-courses" className="courses">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>{new Date().toLocaleDateString()}</h2>
                    <p>Photo Gallery</p>
                </div>
            </div>
            <br></br>
        </section>
        <div className="photo-gallery" data-aos="fade-up">
            <div className="container">

                <div className=" row photos">
                    {currentImages.map((image, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 item" key={index}>
                            <a href={image.imageUrl} data-lightbox="photos">
                                <img className="img-fluid" src={image.imageUrl} alt={`Image ${index + 1}`} />
                            </a>
                        </div>
                    ))}
                </div>
                <nav>
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link prev" onClick={handlePrevious}></button>
                        </li>
                        {[...Array(totalPages)].map((_, index) => (
                            <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                                <button className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button className="page-link next" onClick={handleNext}></button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
    );
}

export default Lightbox;
