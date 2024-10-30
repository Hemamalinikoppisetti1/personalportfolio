import React from 'react';
import './Education.css';
const Education = () => {
  return (
    <div className="education-section" id="Education">
      <h2>EDUCATION</h2>
      <div className="timeline">
        <div className="timeline-item">
        <div className="timeline-box">
          <h3>Board Of Secondary Education - Andhra Pradesh</h3>
          <p>2018 - 2019</p>
            <p>SNV ZPP High School,Tallarevu in 2018 CGPA-10</p>
          </div>
        </div>

        <div className="timeline-item">
        <div className="timeline-box">
          <h3> Intermediate(PUC)</h3>
          <p>2019 - 2021</p>
            <p>Rajiv Gandhi University Of Knowledge and Technologies,IIIT Ongole CGPA-8.9</p>
          </div>
        </div>

        <div className="timeline-item">
        <div className="timeline-box">
          <h3> Bachelor Of Technology in Electronics & Engineering </h3>
          <p>2021 - 2025</p>
            <p>Rajiv Gandhi University Of Knowledge and Technologies,IIIT Ongole CGPA-8.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;