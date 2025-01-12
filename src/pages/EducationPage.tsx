import EducationPageCSS from "../scss/EducationPage.module.scss";

const EducationPage = () => {
  return (
    <>
      <h2>Education</h2>
      <h3>Queen Mary University of London</h3>
      <h4>Computer Science - expected to get 1st Class</h4>
      <h4>September 2023 - July 2027 (Expected)</h4>
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
    </>
  );
};

export default EducationPage;
