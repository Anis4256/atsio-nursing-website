import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/navbar"
import HeroSec from './Home/HeroSec';
import Footer from './Home/Footer';
// import Lightbox from './Home/Lightbox';
import Contact from './Contact/Contact';
import BscNursing from './Course/BscNursing/BscNursing';
import Gnm from './Course/GNM/Gnm';
import Team from './Team/Team';
import Home_About from './Home/Home_About';
import Photos from '../src/Gallery/Photos';
import Maintenance from './Maintenance/Maintenance';
import './style.css';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Library from './Facilities/Library.jsx'
import Faculty from './Faculty/Faculty';
import Eligibility from './Admission/Eligibility';
import DocumentList from './Admission/DocumentList';
import Hostel from "./Facilities/Hostel.jsx"
import Transport from "./Facilities/Transport.jsx"
import Classrooms from './Facilities/Classroom.jsx';
import Mandate from './mandate/Mandate.jsx';
import News from './News/News.jsx';
import Events from './Events/Events.jsx';
import AOS from 'aos';



function App() {


    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }, []);


    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                    <Route path="/" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <HeroSec />
                                <Home_About />
                                <Team />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/news" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <News></News>
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/gallery" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <Photos />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/event" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <Events />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/contact" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <Contact />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/documents" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <DocumentList></DocumentList>
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/criteria" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <Eligibility></Eligibility>
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/library" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <Library />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/hostel" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <Hostel />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/transport" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <Transport />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/classroom" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <Classrooms />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/about" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <Home_About />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/course/bsc" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <BscNursing />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/mandate" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <Mandate></Mandate>
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/course" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <BscNursing />
                                <Gnm></Gnm>
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/course/gnm" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <Gnm></Gnm>
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/faculty" element={
                        <>
                            <Navbar />
                            <div className="content-wrapper">
                                <Faculty />
                            </div>
                            <Footer />
                        </>
                    } />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
