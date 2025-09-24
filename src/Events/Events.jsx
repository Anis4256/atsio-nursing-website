import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import './Events.css'; // Import the CSS file for styling

// Import images for MentalHealthDay
import MH1 from "./MetalHealthDay/MentalHealthDay.png";
import MH2 from "./MetalHealthDay/img1.png";
import MH3 from "./MetalHealthDay/img3.png";
import MH4 from "./MetalHealthDay/img2.png";
// Import images for FresherParty
import FP1 from "./FresherParty/FP1.png";
import FP2 from "./FresherParty/FP2.png";
import FP3 from "./FresherParty/FP3.png";
import FP4 from "./FresherParty/FP4.png";
import FP5 from "./FresherParty/FP5.png";
// Import images for AIDS Awareness
import AIDS1 from "./AIDS_Awareness/AIDS1.png";
import AIDS2 from "./AIDS_Awareness/AIDS2.png";
import AIDS3 from "./AIDS_Awareness/AIDS3.png";
import AIDS4 from "./AIDS_Awareness/AIDS4.png";
// Import images for LampLighting
import LL1 from "./LampLighting/LL1.png";
import LL2 from "./LampLighting/LL2.png";
import LL3 from "./LampLighting/LL3.png";
import LL4 from "./LampLighting/LL4.png";
import LL5 from "./LampLighting/LL5.png";
import LL6 from "./LampLighting/LL6.png";
import LL7 from "./LampLighting/LL7.png";
import LL8 from "./LampLighting/LL8.png";
// Import images for SwachthaAbhiyan
import AA1 from "./SwachthaAbhiyan/AA1.jpg";
import AA2 from "./SwachthaAbhiyan/AA2.jpg";
import AA3 from "./SwachthaAbhiyan/AA3.jpg";
// Women's Health Day
import WHD1 from "./WomensDay/img1.jpg";
// World Health Day
import WH1 from "./World_HealthDay/img1.jpg";
import WH2 from "./World_HealthDay/img2.jpg";
import WH3 from "./World_HealthDay/img3.jpg";
// Gatherings
import G1 from "./gathering/img1.jpg";

function Events() {
    const [showModal, setShowModal] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Hardcoded articles from the old code
    const articles = [
        {
            ImgUrl: "/Events/MentalHealthDay.png",
            title: "Mental Health Day",
            date: "Oct 10 2024",
            content: "Venue: Program hall, SATS Institute of Nursing, Miraj. The Mental Health Day event was a grand success, with students and faculty members participating in various activities to raise awareness about mental health issues.",
            fullContent: "Venue: Program hall, SATS Institute of Nursing, Miraj. The Mental Health Day event was a grand success, with students and faculty members participating in various activities to raise awareness about mental health issues.",
            images: [MH1, MH2, MH3, MH4] // Array of images for the carousel
        },
        {
            ImgUrl: "/Events/FP1.png",
            title: "Fresher's Party",
            date: "Nov 14 2024",
            content: "Venue: SATS Institute of Nursing, Miraj. The Fresher's Party was a fun-filled event, with new students getting to know each other and participating in various games and activities.",
            fullContent: "Venue: SATS Institute of Nursing, Miraj. The Fresher's Party was a fun-filled event, with new students getting to know each other and participating in various games and activities.",
            images: [FP1, FP2, FP3, FP4, FP5] // Array of images for the carousel
        },
        {
            ImgUrl: "/Events/AIDS1.png",
            title: "Rally Regarding World AIDS Day Awareness",
            date: "Dec 02 2024",
            content: "Venue: from sangli civil hospital to sfc maga mall sangli. Students and faculty members participated in a rally to raise awareness about AIDS on World AIDS Day.",
            fullContent: "Venue: from sangli civil hospital to sfc maga mall sangli. Students and faculty members participated in a rally to raise awareness about AIDS on World AIDS Day.",
            images: [AIDS1, AIDS2, AIDS3, AIDS4] // Array of images for the carousel
        },
        {
            ImgUrl: "/Events/LL1.png",
            title: "Lamp Lighting and OATH Taking Ceremony",
            date: "Jan 06 2025",
            content: "Venue: Seminat Hall,SATS Diploma in Pharmacy College,Miraj. The Lamp Lighting and OATH Taking Ceremony was a solemn event, with new students taking an oath to serve the community with compassion and dedication.",
            fullContent: "Venue: Seminat Hall,SATS Diploma in Pharmacy College,Miraj. The Lamp Lighting and OATH Taking Ceremony was a solemn event, with new students taking an oath to serve the community with compassion and dedication.",
            images: [LL1, LL2, LL3, LL4, LL5, LL6, LL7, LL8] // Array of images for the carousel
        },
        {
            ImgUrl: "/Events/AA1.jpg",
            title: "Swachh Bharat Abhiyan",
            date: "Jan 25 2025",
            content: "Venue: SATS Institute of Nursing, Miraj. Students and faculty members participated in a cleanliness drive as part of the Swachh Bharat Abhiyan.",
            fullContent: "Venue: SATS Institute of Nursing, Miraj. Students and faculty members participated in a cleanliness drive as part of the Swachh Bharat Abhiyan.",
            images: [AA1, AA2, AA3] // Array of images for the carousel
        },
        {
            ImgUrl: G1,
            title: "Gathering",
            date: "March 02 2025",
            content: "Venue: SATS Institute of Nursing, Miraj. The gathering was a wonderful opportunity for students and faculty members to come together and celebrate the end of the academic year.",
            fullContent: "Venue: SATS Institute of Nursing, Miraj. The gathering included games, performances, and a chance to reflect on the year's achievements.",
            images: [G1]
        },
        {
            ImgUrl: WHD1,
            title: "Celebrating Women's Day",
            date: "Mar 8 2025",
            content: "Venue: SATS Institute of Nursing, Miraj. Students and faculty members came together to celebrate the achievements of women and promote gender equality.",
            fullContent: "Venue: SATS Institute of Nursing, Miraj. The event featured discussions, performances, and activities aimed at empowering women and promoting inclusivity.",
            images: [WHD1]
        },
        {
            ImgUrl: WH1,
            title: "Celebrating World Health Day",
            date: "Apr 7 2025",
            content: "Venue: SATS Institute of Nursing, Miraj. The event featured an exhibition of projects prepared by nursing students.",
            fullContent: "Venue: SATS Institute of Nursing, Miraj. Students showcased their projects, highlighting innovative ideas and solutions in healthcare.",
            images: [WH1, WH2, WH3]
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
                <p>Events</p>
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
                    <br />
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

export default Events
