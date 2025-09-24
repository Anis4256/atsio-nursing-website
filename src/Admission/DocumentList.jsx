
import React from 'react';
import '../Course/course.css';
import '../Course/course-animations.css';
import './documentList.css';

const documentsBsc = [
    "Entrance Exam Application",
    "Admit Card of CET UG – 2023*",
    "CET – UG 2020 Mark Sheet*",
    "CET Registration Form 2023*",
    "Documents Verification Receipt",
    "Preference Form Print",
    "Selection Letter (Merit List)",
    "Age, Nationality, Domicile*",
    "Secondary School Certificate*",
    "HSC Examination – Result*",
    "Cast Certificate",
    "Certificate of Validity",
    "Non-Creamy Layer Certificate",
    "Leaving/Transfer Certificate*",
    "Migration Certificate",
    "Medical Certificate*",
    "Gap Certificate",
    "Income Proof (2022-23)",
    "Aadhar Card*",
    "Affidavit (College)",
    "College Application"
];

const documentsGNM = [
    "Birth Certificate",
    "Aadhar Card (Original)",
    "SSC Result",
    "SSC Certificate",
    "HSC Result",
    "HSC Certificate",
    "LC/TC (Leaving/Transfer Certificate)",
    "Cast Certificate",
    "Cast Validity Certificate",
    "Age, Nationality, Domicile Certificate",
    "Medical Fitness Certificate (issued by M.B.B.S. Doctor)",
    "Marriage Certificate (if applicable)",
    "Gazette (for Name Correction/Marriage)",
    "Income Certificate (Xerox)",
    "Gap Certificate",
    "ID Photos (5 copies)",
    "Non-Creamy Layer Certificate",
    "Affidavit (College)",
    "Other Relevant Documents (if any)"
];

function DocumentCard({ index, name }) {
    return (
        <div className="document-card fade-in-stagger">
            <div className="document-index">{index + 1}</div>
            <div className="document-name">{name}</div>
        </div>
    );
}

function DocumentList() {
    return (
        <>
            <section id="top" className="course-header-box d-flex justify-content-center align-items-center">
                <div className="toptext container text-center position-relative">
                    <div className="toptext">
                        <h1 className="fadeInDown">Required Documents</h1>
                        <ol className="breadcrumb d-flex justify-content-center mb-1 fadeInDown" data-wow-delay="0.3s">
                            <li><a href="/">Home / </a></li>
                            <li className="active"><a href="">Required Documents</a></li>
                        </ol>
                    </div>
                </div>
            </section>
            <div className="course-container" data-aos="fade-up">
                <div className="container section-title">
                    <h2 className="fadeInDown">Documents for</h2>
                    <p>B.Sc. Nursing</p>
                </div>
                <br />
                <div className="container content document-list">
                    {documentsBsc.map((doc, idx) => (
                        <DocumentCard key={idx} index={idx} name={doc} />
                    ))}
                </div>
                <div className="container section-title">
                    <h2 className="fadeInDown">Documents For</h2>
                    <p>GNM</p>
                </div>
                <br />
                <div className="container content document-list">
                    {documentsGNM.map((doc, idx) => (
                        <DocumentCard key={idx} index={idx} name={doc} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default DocumentList;
