import "./nav.css";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Toplogo from '../img/SBGI_logo.png';
import newgif from '../img/new.gif';
const newsData = [
    {
        date: "June 8, 2023",
        prefix: "CNN: Sport",
        heading: "Alexis Mac Allister: Liverpool sign Brighton Argentina midfielder for £35m.",
        url: "https://"
    },
    {
        date: "June 8, 2023",
        prefix: "CNN: UK Sport",
        heading: "Alexis Mac Allister: Liverpool sign Brighton Argentina midfielder for £35m.",
        url: "https://"
    }
];
function Navbar() {
    const newsItems = [
        { text: "A. Y. 2025-2026_B.Sc. Nursing Institutional Level Admission_ General Merit List" },
        { text: "A. Y. 2025-2026_B.Sc. Nursing Institutional Level Admission_ Quota wise Merit List" },
        { text: "Admissions Open for Nursing Programs: Apply Now" },
    ];
    const [news, setNews] = useState(newsData);

    return (
        <>
            <header id="header" className="fixed-top">
                <div id="hederpad" className="d-flex align-items-center">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid d-flex justify-content-between">
                            <Link to="/" className="logo me-auto">
                                <img src={Toplogo} alt="Logo" className="img-fluid" />
                            </Link>

                            <button className="navbar-toggler fr" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link className="nav-link active" to="/"><i className="bi bi-house-fill me-1"></i> Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/about"><i className="bi bi-info-circle me-1"></i> About</Link></li>
                                    <li className="nav-item dropdown dropdown-hover">
                                        <a className="nav-link dropdown-toggle" id="dropdownMenuButton" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-mortarboard-fill me-1"></i> Courses
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-hover" aria-labelledby="dropdownMenuButton">
                                            <li><Link className="dropdown-item" to="/course/bsc"><i className="bi bi-mortarboard me-1"></i>Bsc Nursing</Link></li>
                                            <li><Link className="dropdown-item" to="/course/gnm"><i className="bi bi-mortarboard me-1"></i>GNM</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/faculty">
                                            <i className="bi bi-person-fill me-1"></i>Faculty
                                        </Link>

                                    </li>
                                    <li className="nav-item dropdown dropdown-hover">
                                        <a className="nav-link dropdown-toggle" id="dropdownMenuButton" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-building"></i> Facilities
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-hover" aria-labelledby="dropdownMenuButton">
                                            <li><Link className="dropdown-item" to="/library"><i className="bi bi-book me-1"></i>Library</Link></li>
                                            <li><Link className="dropdown-item" to="/classroom"><i className="bi bi-person-workspace me-1"></i> Classroom</Link></li>
                                            <li><Link className="dropdown-item" to="/hostel"><i className="bi bi-building-add me-1"></i>Hostel</Link></li>
                                            <li><Link className="dropdown-item" to="/transport"><i className="bi bi-bus-front-fill me-1"></i>Transport</Link></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown dropdown-hover">
                                        <a className="nav-link dropdown-toggle" id="dropdownMenuButton" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-clipboard-check me-1"></i>Admissions
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-hover" aria-labelledby="dropdownMenuButton">
                                            <li><Link className="dropdown-item" to="/criteria"><i className="bi bi-card-checklist me-1"></i>Eligibility Criteria</Link></li>
                                            <li><Link className="dropdown-item" to="/documents"><i className="bi bi-card-checklist me-1"></i>List of Documents</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to="/mandate"><i className="bi bi-shield-check me-1"></i>Mandate</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/news"><i className="bi bi-newspaper me-1"></i> News</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/event"><i className="bi bi-calendar-event me-1"></i> Events</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/gallery"><i className="bi bi-image-fill me-1"></i>Gallery</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/contact"><i className="bi bi-person-rolodex me-1"></i>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between align-items-center breaking-news bg-dark">
                            <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news">
                                <span className="d-flex align-items-center">&nbsp;Latest News</span>
                            </div>
                            <marquee className="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                                {newsItems.map((item, index) => (
                                    <span key={index} className="news-item">
                                        <img src={newgif} width={30} height={30} />
                                        <a className="text-white" href="#">{item.text}</a>
                                    </span>
                                ))}
                            </marquee>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
