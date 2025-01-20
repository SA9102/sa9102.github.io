import EducationPageCSS from "../scss/EducationPage.module.scss";

const EducationPage = () => {
  return (
    <>
      <h2>Education</h2>
      <h3>Queen Mary University of London</h3>
      <h4>Computer Scienc | September 2023 - July 2027 (Expected)</h4>
      <p>Expected to get 1st Class.</p>
      <p>Main modules include:</p>
      <ul className={EducationPageCSS.modules}>
        <li>Software Engineering</li>
        <li>Algorithms and Data Structures</li>
        <li>Databases</li>
        <li>Fundamentals of Web Development</li>
        <li>Object-Oriented Programming</li>
        <li>Automata and Formal Languages</li>
      </ul>

      <h3>Beal High School</h3>
      <p>A-Levels:</p>
      <ul>
        <li>Mathematics (A*)</li>
        <li>Computer Science (A*)</li>
        <li>Physics (A)</li>
      </ul>
    </>
  );
};

export default EducationPage;
