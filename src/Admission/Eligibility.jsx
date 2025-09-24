





import React from 'react';
import './Eligibility.css';

function Eligibility() {
    return <>
        <section id="top" className="d-flex justify-content-center align-items-center">
            <div className="toptext container text-center position-relative">
                <div className='toptext'>
                    <h1>Eligibility Criteria</h1>
                    <h2>Discover the requirements and qualifications needed to join our nursing programs.</h2>
                    <ol className="breadcrumb d-flex justify-content-center mb-1 wow fadeInDown" data-wow-delay="0.3s">
                        <li ><a href="/">Home / </a> </li>
                        <li className='active'><a href="">Eligibility Criteria</a></li>
                    </ol>
                </div>
            </div>
        </section>

        <div className="container eligibility-container">
            <div className="eligibility-card" data-aos="fade-up">
                <h2 className="eligibility-title">B.Sc Nursing</h2>
                <p className="eligibility-subtitle">Eligibility Requirements</p>
                <p className="eligibility-description"><strong>Admission Requirements for B.Sc Nursing Program</strong></p>
                <p className="eligibility-description">The Bachelor of Science in Nursing program maintains high standards to ensure quality education and patient care excellence.</p>
                <p className="eligibility-description"><strong>Program Requirements:</strong> To be eligible for admission to the B.Sc Nursing program, candidates must meet the following criteria:</p>

                <ul className="requirements-list">
                    <li>
                        <i className="bi bi-check-circle"></i>
                        <div className="requirement-content">
                            <div className="requirement-title">Entrance Exam Performance</div>
                            <div className="requirement-text">Candidates belonging to the OPEN category and EWS category must secure at least 50 percentile in the MH-B.Sc Nursing-CET 2023.</div>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-check-circle"></i>
                        <div className="requirement-content">
                            <div className="requirement-title">Reserved Category</div>
                            <div className="requirement-text">Candidates from constitutional reservations (except EWS) must secure at least 40 percentile in the MH-B.Sc Nursing-CET 2023.</div>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-check-circle"></i>
                        <div className="requirement-content">
                            <div className="requirement-title">Disability Category</div>
                            <div className="requirement-text">Persons with disabilities (General category) must secure a minimum of 45 percentile in the MH-B.Sc Nursing-CET 2023, or as determined by the Indian Nursing Council from time to time. (As per Indian Nursing Council regulations, 2022)</div>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-check-circle"></i>
                        <div className="requirement-content">
                            <div className="requirement-title">Age Requirement</div>
                            <div className="requirement-text">The minimum age for admission is 17 years by 31st December of the admission year.</div>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-check-circle"></i>
                        <div className="requirement-content">
                            <div className="requirement-title">Educational Requirements</div>
                            <div className="requirement-text">
                                <ul className="nested-list">
                                    <li>Passed 10+2 with Science (PCB) and English Core/Elective with an aggregate of 45% marks from a recognized board (AISSCE/CBSE/ICSE/SSCE/HSCE or equivalent).</li>
                                    <li>Students appearing for the 10+2 examination in Science from the National Institute of Open School with 45% marks are also eligible.</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-check-circle"></i>
                        <div className="requirement-content">
                            <div className="requirement-title">Medical Fitness</div>
                            <div className="requirement-text">Candidates must be medically fit.</div>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-check-circle"></i>
                        <div className="requirement-content">
                            <div className="requirement-title">Admission Schedule</div>
                            <div className="requirement-text">Admissions are conducted once a year.</div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="eligibility-card" data-aos="fade-up">
                <h2 className="eligibility-title">GNM Nursing</h2>
                <p className="eligibility-subtitle">Eligibility Requirements</p>
                <p className="eligibility-description"><strong>Admission Requirements for General Nursing and Midwifery Program</strong></p>
                <p className="eligibility-description">The General Nursing and Midwifery program welcomes candidates who demonstrate academic readiness and commitment to nursing excellence.</p>
                <p className="eligibility-description"><strong>Program Requirements:</strong> To be eligible for admission to the GNM program, candidates must meet the following criteria:</p>

                <ul className="requirements-list">
                    <li>
                        <i className="bi bi-check-circle"></i>
                        <div className="requirement-content">
                            <div className="requirement-title">Educational Eligibility</div>
                            <div className="requirement-text">
                                <ol className="nested-list">
                                    <li>Passed 10+2 with English with a minimum of 40% marks in the qualifying examination and individually in English, from any recognized board. Candidates from State Open Schools and the National Institute of Open School (NIOS) are also eligible. Science is preferable.</li>
                                    <li>Passed 10+2 with English and 40% marks in vocational ANM course from a school recognized by the Indian Nursing Council.</li>
                                    <li>Passed 10+2 with English and 40% marks in the Vocational Stream – Health Care Science from a recognized CBSE board or center.</li>
                                    <li>Registered ANM with pass marks.</li>
                                </ol>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-check-circle"></i>
                        <div className="requirement-content">
                            <div className="requirement-title">Foreign Nationals</div>
                            <div className="requirement-text">
                                <ul className="nested-list">
                                    <li>Qualification equivalency for the 12th standard will be determined by the Association of Indian Universities, New Delhi. The institution and State Nursing Council must ensure that qualifications are equivalent to those prescribed above.</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-check-circle"></i>
                        <div className="requirement-content">
                            <div className="requirement-title">Reservation Policy</div>
                            <div className="requirement-text">
                                <ol className="nested-list">
                                    <li><strong>Disabled candidates:</strong> 3% reservation for candidates with 40% to 50% locomotor disability in the lower extremity, provided they meet the other age and qualification criteria. A committee consisting of a state government medical officer and a nursing expert will assess the disability.</li>
                                    <li><strong>SC/ST candidates:</strong> 5% relaxation in marks.</li>
                                    <li><strong>Other reservations:</strong> Any other reservations as per the State Government policies. Reservations are included in the sanctioned seats.</li>
                                </ol>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-check-circle"></i>
                        <div className="requirement-content">
                            <div className="requirement-title">Admission Details</div>
                            <div className="requirement-text">Admissions are conducted once a year, and candidates must be medically fit.</div>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-check-circle"></i>
                        <div className="requirement-content">
                            <div className="requirement-title">Age Criteria</div>
                            <div className="requirement-text">Minimum age for admission is 17 years by 31st December of the admission year. The upper age limit is 35 years (No age bar for ANM/LHV candidates).</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </>
}
export default Eligibility;
