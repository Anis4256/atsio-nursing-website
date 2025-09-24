import React, { useState } from 'react';
import { Teaching, NonTeching } from "../team.js";
import './faculty.css';

function Faculty() {
    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMember(null);
    };

    return (
        <>
            <section id="top" className="d-flex justify-content-center align-items-center">
                <div className="toptext container text-center position-relative">
                    <div className='toptext'>
                        <h1>Teaching Staff</h1>
                        <h2>Expert Guidance: Meet Sanjay Bhokare College of Nursing's Experienced Faculty</h2>
                        <ol className="breadcrumb d-flex justify-content-center mb-1 wow fadeInDown" data-wow-delay="0.3s">
                            <li ><a href="/">Home / </a> </li>
                            <li className='active'><a href="/faculty">Faculty</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <section id="popular-courses" className="courses">
                <div className="container" data-aos="fade-up">
                    <div className="section-title" data-aos="fade-up">
                        <h2>ATS SBGI</h2>
                        <p>Our Teaching Staff</p>
                    </div>
                </div>
            </section>

            {/* Center the team section */}
            <div className="container-xxl py-5" data-aos="fade-up">
                <div className="container d-flex justify-content-center">
                    <div className="row g-4 justify-content-center">
                        {/* Loop through the team data and display each member */}
                        {Teaching.map((member, index) => (
                            <div className="col-lg-3 col-md-6 wow fadeInUp d-flex justify-content-center" data-wow-delay={`${index * 0.1}s`} key={index}>
                                <div className="team-item bg-light" style={{ width: "290px", cursor: "pointer" }} onClick={() => openModal(member)}>
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src={member.image} alt={member.name} />
                                    </div>
                                    <div className="text-center p-4">
                                        <h5 className="mb-0">{member.name}</h5>
                                        <small>{member.position}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section id="popular-courses" className="courses">
                <div className="container" data-aos="fade-up">
                    <div className="section-title" data-aos="fade-up">
                        <h2>ATS SBGI</h2>
                        <p>Our Non-Teaching Staff</p>
                    </div>
                </div>
            </section>
            <div className="container-xxl py-5" data-aos="fade-up">
                <div className="container d-flex justify-content-center">
                    <div className="row g-4 justify-content-center">
                        {/* Loop through the team data and display each member */}
                        {NonTeching.map((member, index) => (
                            <div className="col-lg-3 col-md-6 wow fadeInUp d-flex justify-content-center" data-wow-delay={`${index * 0.1}s`} key={index}>
                                <div className="team-item bg-light" style={{ width: "290px", cursor: "pointer" }} onClick={() => openModal(member)}>
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src={member.image} alt={member.name} />
                                    </div>
                                    <div className="text-center p-4">
                                        <h5 className="mb-0">{member.name}</h5>
                                        <small>{member.position}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for detailed view */}
            {isModalOpen && (
                <div className="faculty-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        {selectedMember && (
                            <>
                                <img src={selectedMember.image} alt={selectedMember.name} style={{ width: '100%', borderRadius: '10px' }} />
                                <h2>{selectedMember.name}</h2>
                                <p><strong>Position:</strong> {selectedMember.position}</p>
                                {selectedMember.education && <p><strong>Education:</strong> {selectedMember.education}</p>}
                                <p>Click outside to close.</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Faculty;
