import { Typography } from "@mui/material";

const Education = () => {
  return (
    <>
      <Typography variant="h1" fontWeight="bold">
        Education
      </Typography>
      <Typography variant="h2">Queen Mary University of London</Typography>
      <Typography variant="caption">
        BSc Computer Science, final-year
      </Typography>
      <Typography variant="caption">Expected grade: At least a 2:1</Typography>
      <Typography>Main modules include:</Typography>
      <ul>
        <li>
          <Typography>Software Engineering</Typography>
        </li>
        <li>
          <Typography>Object-Oriented Programming</Typography>
        </li>
        <li>
          <Typography>Web Programming</Typography>
        </li>
        <li>
          <Typography>Databases</Typography>
        </li>
        <li>
          <Typography>Algorithms and Data Structures</Typography>
        </li>
        <li>
          <Typography>Data Mining</Typography>
        </li>
      </ul>
    </>
  );
};

export default Education;
