
import React from 'react';
import '../course.css'
import '../course-animations.css'

function BscNursing() {
    return <>
        <section id="top" className="d-flex justify-content-center align-items-center course-header-box">
            <div className="toptext text-center position-relative course-header" data-aos="fade-up">
                <div className='toptext'>
                    <h1>B.Sc Nursing</h1>
                    <h2> Develop compassionate care skills, critical thinking, and leadership abilities to make a difference in patients' lives.</h2>
                    <ol className="breadcrumb d-flex justify-content-center mb-1 wow fadeInDown" data-wow-delay="0.3s">
                        <li ><a href="/">Home / </a> </li>
                        <li ><a href="/course/bsc">Course / </a></li>
                        <li className='active'><a href="/course/bsc">B.Sc Nursing</a></li>
                    </ol>
                </div>
            </div>
        </section>
        <div className="container section-title course-section" data-aos="fade-up">
            <h2>B.Sc Nursing 2024-25</h2>
            <p>Course Details</p>
        </div>
        <br></br>
        <div className="container course-section course-container" data-aos="fade-up">
            <strong>Empowering the Next Generation of Nursing Professionals</strong>

            <p>The Bachelor of Science in Nursing ( <a href="#">B.Sc Nursing</a> ) program is designed to cultivate
                compassionate,
                competent, and critically thinking nurses who can make a meaningful impact in the healthcare industry.</p>

            <strong>Program Aims:</strong>

            <p> Our undergraduate nursing program focuses on preparing graduates to:</p>

            <ul>
                <li><i className="bi bi-check-circle text-danger"></i> Provide holistic, patient-centered care as professional nurses and midwives</li>

                <li><i className="bi bi-check-circle text-danger"></i> Demonstrate autonomy in nursing practice, advocating for individuals' and groups' health rights</li>
                <li><i className="bi bi-check-circle text-danger"></i> Function effectively in various healthcare settings, including hospitals, community health services, and
                    research
                    institutions</li>
                <li><i className="bi bi-check-circle text-danger"></i> Assume leadership roles as educators, supervisors, and managers in clinical and public health settings</li>
            </ul>
            <strong>Program Objectives:</strong>

            <p> Upon completing the <a href="#">B.Sc Nursing</a> degree program, graduates will be equipped to:
            </p>

            <ol>
                <li><b>Integrate Scientific Knowledge:</b> Apply principles from physical, biological, and behavioral sciences to
                    deliver
                    evidence-based nursing care.</li>

                <li> <b>Promote Health and Wellness:</b> Recognize the impact of lifestyle factors on health and provide
                    preventive,
                    promotive, and restorative services.</li>
                <li><b>Think Critically:</b> Utilize nursing process steps to make informed decisions and provide high-quality
                    care.</li>
                <li> <b>Embrace Technology:</b> Leverage latest healthcare trends and technologies to optimize patient outcomes.
                </li>
                <li><b>Uphold Ethics and Standards:</b> Practice within the framework of professional conduct, ethics, and legal
                    boundaries.</li>
                <li> <b>Communicate Effectively:</b> Foster healing through empathetic interactions with individuals, groups, and
                    healthcare
                    teams.</li>
                <li><b>Educate and Empower:</b> Demonstrate teaching skills in clinical and community health settings.</li>
                <li><b>Collaborate and Lead:</b> Participate in healthcare teams and exhibit leadership and managerial skills.
                </li>
                <li> <b>Advance Research:</b> Conduct needs-based research and apply findings to enhance care quality.</li>
            </ol>
        </div>



        <div className="container section-title course-section" data-aos="fade-up">
            <h2>B.Sc Nursing 2024-25</h2>
            <p>Fee Structure</p>
        </div>
        <p className="container course-section" data-aos="fade-up">Duration: 4 Year</p>



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
                        <td>80,000/- Per Year</td>
                        <td>Semester</td>
                    </tr>
                    {/* <tr>
                        <th scope="row">Secound Year</th>
                        <td>2 Semester</td>
                        <td>80,000/- Per Year</td>
                        <td>Semester</td>
                    </tr>
                    <tr>
                        <th scope="row">Third Year</th>
                        <td>2 Semester</td>
                        <td>80,000/- Per Year</td>
                        <td>Semester</td>
                    </tr>
                    <tr>
                        <th scope="row">Fourth Year</th>
                        <td>1 Year</td>
                        <td>80,000/- Per Year</td>
                        <td>Annual</td>
                    </tr> */} 
                </tbody>
            </table>
        </div>
    </>
}
export default BscNursing;
