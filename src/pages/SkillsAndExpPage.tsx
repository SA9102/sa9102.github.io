import SkillsAndExpPageCSS from "../scss/SkillsAndExpPage.module.scss";
import experiences from "../content/skillsAndExperience";

const SkillsAndExpPage = () => {
  return (
    <>
      <h2>Experience</h2>
      {experiences.map((exp) => (
        <div className="card">
          <h3>{exp.work}</h3>
          <h4>{exp.date}</h4>
          <div className={SkillsAndExpPageCSS["paragraphs"]}>
            {exp.content.map((cont) => (
              <div className={`card ${SkillsAndExpPageCSS.paragraphs}`}>
                <h5>{cont.heading}</h5>
                {cont.text.map((paragraph) => (
                  <p>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* <h3>Superdrug - Sales Assistant (part-time)</h3>
      <h4>March 2023 - Present</h4>
      {superdrug.map((content) => (
        <article>
          <h5>{content.heading}</h5>
          <div className={SkillsAndExpPageCSS.paragraphs}>
            {content.text.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
      <br />
      <h3>Personal Projects</h3>
      <h4>January 2022 - Present</h4>
      {projects.map((content) => (
        <article>
          <h5>{content.heading}</h5>
          <p>{content.text}</p>
        </article>
      ))} */}
    </>
  );
};

// const ExpAndEduPage = () => {
//   return (
//     <>

//     </>
//     <div className="page">
//       <div>
//         <h2 className="title">Queen Mary University of London</h2>
//         <h3>Computer Science | September 2023 - July 2027 (Expected)</h3>
//         <p>
//           Some of the main modules include: software engineering, database
//           design, object-oriented programming, web development, algorithms and
//           data structures
//         </p>
//         <p>
//           Some of the main modules include: software engineering, database
//           design, object-oriented programming, web development, algorithms and
//           data structures
//         </p>
//       </div>
//       <div>
//         <h2 className="title">Superdrug</h2>
//         <h3>Sales Assistant | March 2023 - Present</h3>
//         <p>
//           During my part-time job as a sales assistant, I maintain a Superdrug
//           store and help customer with whatever needs they have. I may also be
//           tasked with ensuring that the correct promotional displays are shown
//           to customers, as well as stocking up the shelves. Working at Superdrug
//           has helped me grow as a person, and in particular has improved my
//           confidence, and I am always learning something new. My time there has
//           been, and still is, enjoyable.
//         </p>
//       </div>
//       <div>
//         <h2 className="title">Hobby Projects</h2>
//         <h3>Sales Assistant | March 2023 - Present</h3>
//         <p>
//           When I'm not working, I sometimes like to put my programming skills to
//           use by working on different projects. It's an opportunity to express
//           my creativity and improve on my programming and problem solving
//           skills. Check out some of my projects in the 'Projects' tab.
//         </p>
//         <p>
//           I mostly work on full-stack applications, where I use React and
//           NodeJS.
//         </p>
//       </div>
//       {/* <section id="experience">
//         <h3 className="experience-title">Experience</h3>
//           <h4>Queen Mary University of London</h4>
//           <p className="experience-date">September 2023 - June 2027 (expected)</p>
//           <ul>
//             <li>
//               <p>Completing BSc in Computer Science.</p>
//             </li>
//             <li>
//               <p>Learning Java from basic to advanced concepts.</p>
//             </li>
//             <li>
//               <p>Completing a virtual work experience programme on web development, designed by Moreton Bay Regional Council.</p>
//             </li>
//           </ul>
//           <h4>Superdrug, Sales Advisor</h4>
//           <p className="experience-date">March 2023 - Present</p>
//           <ul>
//             <li>
//               <p>Working at pace to help maintain the store whilst also serving customers.</p>
//             </li>
//             <li>
//               <p>Maintaining positive and friendly relationships with colleagues.</p>
//             </li>
//           </ul>
//           <h4>Volunteering at British Heart Foundation store</h4>
//           <p className="experience-date">September 2022 - January 2023</p>
//           <ul>
//             <li>
//               <p>Working effectively with other colleagues to build furniture</p>
//             </li>
//             <li>
//               <p>Answering customer queries about certain products in store.</p>
//             </li>
//           </ul>
//           <h4>Beal Sixth Form, A Levels</h4>
//           <p className="experience-date">September 2014 - June 2021</p>
//           <ul>
//             <li>
//               <p>A* Mathematics</p>
//             </li>
//             <li>
//               <p>A* Computer Science</p>
//             </li>
//             <li>
//               <p>A Physics</p>
//             </li>
//           </ul>
//       </section> */}
//     </div>
//   );
// };

export default SkillsAndExpPage;
