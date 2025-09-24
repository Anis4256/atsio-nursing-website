import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import './News.css'; // Import the CSS file for styling
import img1 from "../img/Slide1.JPG";
import img2 from "../img/Slide2.JPG";
import img3 from "../img/Slide3.JPG";

function NewsPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Example articles (you can add more)
    const articles = [
        {
            ImgUrl: "/News/News1.jpg",
            title: "Grand Opening Ceremony Of Nursing Institute",
            date: "Jan 31 2025",
            content: "In the auspicious and prominent presence of dignitaries taking place on 31st January 2025.",
            fullContent: "The Grand Opening Ceremony was a grand occasion attended by distinguished guests, faculty members, and students. This event marks a significant milestone in the journey of the Nursing Institute, showcasing its commitment to providing world-class education.",
            images: [img1, img2, img3] // Array of images for the carousel
        },
    ];

    // Function to handle article click and open the modal
    const handleArticleClick = (article) => {
        setSelectedArticle(article);
        setShowModal(true);
    };

    // Function to close the modal
    const closeModal = () => setShowModal(false);

    return (
        <div className="news-container">
            <div className="section-title">
                <h2>Sanjay Bhokare</h2>
                <p>Latest News</p>
            </div>

            <br />
            <div className="articles">
                {articles.map((article, index) => (
                    <div className="article-card" key={index} onClick={() => handleArticleClick(article)}>
                        <img src={article.ImgUrl} className="article-img" alt={article.title} />
                        <h2 className="article-title">{article.title}</h2>
                        <p className="article-date">{article.date}</p>
                        <p className="article-content">{article.content}</p>
                    </div>
                ))}
            </div>

            {/* Bootstrap Modal for displaying full article content */}
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedArticle?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>{selectedArticle?.date}</strong></p>

                    {/* Carousel for images */}
                    <Carousel>
                        {selectedArticle?.images?.map((img, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    style={{ maxHeight: "500px", objectFit: "cover" }}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    <p>{selectedArticle?.fullContent}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default NewsPage;
