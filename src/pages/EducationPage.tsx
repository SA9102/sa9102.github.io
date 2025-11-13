import EducationPageCSS from "../scss/EducationPage.module.scss";

const EducationPage = () => {
  return (
    <>
      <h2>Education</h2>
      <div className="card">
        <h3>Queen Mary University of London</h3>
        <h4>Computer Science | September 2023 - July 2026 (Expected)</h4>
        <p>Main modules include:</p>
        <ul className={EducationPageCSS.modules}>
          <li>Software Engineering</li>
          <li>Web Programming</li>
          <li>Object-Oriented Programming</li>
          <li>Data Mining</li>
          <li>Databases</li>
          <li>Algorithms and Data Structures</li>
          <li>Graphical User Interfaces</li>
        </ul>
      </div>
      <div className="card">
        <h3>Beal High School</h3>
        <h4>September 2014 - June 2021</h4>
        <p>A-Levels:</p>
        <ul>
          <li>Mathematics (A*)</li>
          <li>Computer Science (A*)</li>
          <li>Physics (A)</li>
        </ul>
      </div>
    </>
  );
};

export default EducationPage;
