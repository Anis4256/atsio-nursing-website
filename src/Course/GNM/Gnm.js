import React from 'react';
import '../course.css'
import '../course-animations.css'

function Gnm() {
    return <>
        <section id="top" className="d-flex justify-content-center align-items-center course-header-box">
            <div className="toptext text-center position-relative course-header" data-aos="fade-up">
                <div className='toptext'>
                    <h1>GNM Nursing</h1>
                    <h2>Develop foundational nursing skills, compassion, and expertise to provide quality patient care.</h2>
                    <ol className="breadcrumb d-flex justify-content-center mb-1 wow fadeInDown" data-wow-delay="0.3s">
                        <li><a href="/">Home /</a></li>
                        <li><a href="/course/gnm">Course / </a></li>
                        <li className='active'><a href="/course/gnm">GNM Nursing</a></li>
                    </ol>
                </div>
            </div>
        </section>

        <div className="container section-title course-section" data-aos="fade-up">
            <h2>GNM Nursing</h2>
            <p>Course Details</p>
        </div>
        <br></br>
        <div className="container course-section course-container" data-aos="fade-up">
            <strong>Building Foundations for Nursing Excellence</strong>
            <p>The General Nursing and Midwifery (GNM) program equips students with essential skills, knowledge, and values to provide high-quality patient care.</p>

            <strong>Program Aims:</strong>
            <p>Our GNM program focuses on preparing graduates to:</p>
            <ul>
                <li><i className="bi bi-check-circle text-danger"></i> Provide compassionate, patient-centered care as nursing professionals.</li>
                <li><i className="bi bi-check-circle text-danger"></i> Demonstrate competence in nursing practices, health promotion, and disease prevention.</li>
                <li><i className="bi bi-check-circle text-danger"></i> Function effectively in various healthcare settings, including hospitals and community health services.</li>
                <li><i className="bi bi-check-circle text-danger"></i> Assume roles as team members, leaders, and educators in clinical and community health settings.</li>
            </ul>

            <strong>Program Objectives:</strong>
            <p>Upon completing the GNM program, graduates will be equipped to:</p>
            <ol>
                <li><b>Apply Nursing Fundamentals:</b> Demonstrate understanding of nursing principles, practices, and skills.</li>
                <li><b>Promote Health and Wellness:</b> Recognize lifestyle factors impacting health and provide preventive services.</li>
                <li><b>Provide Safe Care:</b> Utilize nursing process steps to deliver high-quality patient care.</li>
                <li><b>Communicate Effectively:</b> Foster healing through empathetic interactions with patients, families, and healthcare teams.</li>
                <li><b>Demonstrate Professionalism:</b> Practice within ethical, legal, and professional boundaries.</li>
                <li><b>Collaborate and Lead:</b> Participate in healthcare teams and exhibit leadership skills.</li>
            </ol>
        </div>

        <div className="container section-title course-section" data-aos="fade-up">
            <h2>GNM Nursing</h2>
            <p>Fee Structure</p>
        </div>
        <p className="container course-section" data-aos="fade-up">Duration: 3 Year</p>
        <div className="container course-section course-container" data-aos="fade-up">
            <table className="table ">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Fee</th>
                        <th scope="col">Pattern</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">First Year</th>
                        <td>1 Year</td>
                        <td>55,000/- Per Year</td>
                        <td>Annual</td>
                    </tr>
                    {/* <tr>
                        <th scope="row">Secound Year</th>
                        <td>1 Year</td>
                        <td>55,000/- Per Year</td>
                        <td>Annual</td>
                    </tr>
                    <tr>
                        <th scope="row">Third Year</th>
                        <td>1 Year</td>
                        <td>55,000/- Per Year</td>
                        <td>Annual</td>
                    </tr> */} 
                </tbody>
            </table>
        </div>
    </>
}

export default Gnm;
