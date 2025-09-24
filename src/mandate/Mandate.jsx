import React from 'react';

function Mandate() {
    return (
        <>
            <section id="top" className="d-flex justify-content-center align-items-center">
                <div className="mandate-text container text-center position-relative">
                    <div className='mandate-text'>
                        <br />
                        <h1>Our Mandate</h1>
                        <h2>Empowering the Future of Healthcare</h2>
                        <p style={{ color: "#ffdfdf" }}>At Sanjay Bhokare College of Nursing, our mandate is to provide exceptional nursing education, foster a culture of compassion, and equip future healthcare professionals with the skills necessary to excel in a rapidly evolving healthcare landscape.</p>
                        <ol className="breadcrumb d-flex justify-content-center mb-1 wow fadeInDown" data-wow-delay="0.3s">
                            <li><a href="/">Home / </a></li>
                            <li><a href="/mandate">Mandate</a></li>
                        </ol>
                    </div>
                </div>
            </section>

            <div className="container section-title" data-aos="fade-up">
                <h2>Mandate Details</h2>
                <p>Here are the important documents and resources associated with our mandate:</p>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Sr. No.</th>
                                <th>Particulars</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Annexure I</td>
                                <td>Seat Matrix</td>
                                <td><a href={require('./PDF/ANNEX- I_.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure II</td>
                                <td>Infrastructure Details</td>
                                <td><a href={require('./PDF/Annexure-II.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure III</td>
                                <td>Trust Deed / Bylaws / Registration Certificate</td>
                                <td><a href={require('./PDF/ANNEX- III.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure IV</td>
                                <td>Library Details</td>
                                <td><a href={require('./PDF/ANNEXURE-IV.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure V</td>
                                <td>Clinical Material in Hospital</td>
                                <td><a href={require('./PDF/ANNEX-V.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure VI</td>
                                <td>Total Teaching Staff Information as per MSR</td>
                                <td><a href={require('./PDF/ANNEXURE-VI.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure VII</td>
                                <td>Total Subject-wise Teacher List</td>
                                <td><a href={require('./PDF/ANNEXURE-VII.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure VIII</td>
                                <td>Details of Part Time Teachers</td>
                                <td><a href={require('./PDF/ANNEXURE-VIII.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>

                            <tr>
                                <td>Annexure IX</td>
                                <td>Total Non-Teaching Staff & Ancillary Services Information</td>
                                <td><a href={require('./PDF/Annexure-IX.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure X</td>
                                <td>Information of Workshops, Activities Performed in last one year</td>
                                <td><a href={require('./PDF/ANNEX-X.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure XI</td>
                                <td>Information of Biometric Attendance, Research Articles, Student Welfare Schemes</td>
                                <td><a href={require('./PDF/ANNEX-XI.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure XII</td>
                                <td>AISHE (ALL India Survey of Higher Education) Certificate</td>
                                <td><a href={require('./PDF/ANNEX-XII.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure XIII</td>
                                <td>For Online Transmission of Question Papers</td>
                                <td><a href={require('./PDF/ANNEX-XIII.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure XIII A</td>
                                <td>Subjectwise eligible examiners list(UG Courses)</td>
                                <td><a href={require('./PDF/ANNEXURE-XIIIA.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure XIII B</td>
                                <td>Subjectwise eligible examiners list(PG Courses)</td>
                                <td><a href={require('./PDF/ANNEX-XIIIB.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure XIV</td>
                                <td>Result of last three Semester Percentage</td>
                                <td><a href="/doc" className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure XV</td>
                                <td>Minimum Hostel Facility As Per MSR </td>
                                <td><a href={require('./PDF/ANNEX-XV.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>
                            <tr>
                                <td>Annexure XVI</td>
                                <td>Declaration by the Principal of the College </td>
                                <td><a href={require('./PDF/Annexure-XVI-Declaration.pdf')} className="btn btn-primary">Click Here</a></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Mandate;
