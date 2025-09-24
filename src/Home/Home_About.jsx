import React from 'react';
import './Home_About.css';
import imglogo from "../img/col1.jpg";

function Home_About() {
    return (
        <>
            <section className="container sectiontitle" style={{ marginTop: "90px" }}>
                <h2>Sanjay Bhokare College of Nursing</h2>
                <p>About Our College</p>
            </section>

            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        {/* Image Column */}
                        <div className="col-12" data-aos-anchor-placement="center-bottom">
                            <img
                                src={imglogo}
                                className="img-fluid"
                                alt="Sanjay Bhokare College of Nursing campus"
                            />
                        </div>

                        {/* Content Column */}
                        <div className="col-12 content pt-4 pt-lg-0">
                            <h3>Sanjay Bhokare College of Nursing</h3>
                            <p className="fst-italic">
                                Empowering Future Nursing Leaders with Excellence in Education.
                            </p>
                            <p>
                                Sanjay Bhokare College of Nursing, part of the renowned
                                <a href="https://www.sbgimiraj.org/" target="_blank" rel="noopener noreferrer">
                                    Sanjay Bhokare Group of Institutes
                                </a>, is committed to preparing skilled and compassionate nursing professionals. We offer high-quality programs in
                                <a href='/course/gnm'>General Nursing and Midwifery (GNM)</a> and
                                <a href='/course/bsc'>Bachelor of Science in Nursing (B.Sc)</a>.
                                Our mission is to provide exceptional nursing education that aligns with global healthcare standards.
                            </p>

                            <ul>
                                <li><i className="bi bi-check-circle"></i>
                                    General Nursing and Midwifery (GNM) - A 3-year program focused on primary healthcare roles with both practical and theoretical training.
                                </li>
                                <li><i className="bi bi-check-circle"></i>
                                    Bachelor of Science in Nursing (B.Sc) - A 4-year program that emphasizes clinical expertise, research, and leadership development.
                                </li>
                            </ul>

                            <p>
                                At Sanjay Bhokare College of Nursing, we provide students with modern infrastructure, experienced faculty, and extensive clinical exposure. Our aim is to shape ethical, patient-centered professionals who are ready to meet the challenges of the healthcare industry.
                            </p>

                            <div>
                                <strong>Why Choose Us?</strong>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i>
                                        State-of-the-art facilities, including simulation labs and a digital library.
                                    </li>
                                    <li><i className="bi bi-check-circle"></i>
                                        Hands-on training in reputed hospitals and healthcare settings.
                                    </li>
                                    <li><i className="bi bi-check-circle"></i>
                                        Focus on leadership, ethical practices, and holistic student development.
                                    </li>
                                </ul>
                            </div>

                            <p>
                                Join us at Sanjay Bhokare College of Nursing and become part of a community dedicated to nursing excellence and compassionate care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home_About;
