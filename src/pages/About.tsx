import { Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Stack gap="3rem">
      <Typography variant="h1" fontWeight="bold">
        A little bit about me...
      </Typography>
      <Typography variant="body2">
        From a young age, I've been fascinated by the power and versatility of
        coding. That was when I got hooked into it, and have never looked back
        since.
      </Typography>

      <Typography variant="body2">
        Fast forward to now, I've spent the last three years exploring the world
        of web development. I've been doing guided courses and building my own
        personal projects to sharpen my skills and explore new technologies.
        It's been an exciting and rewarding journey so far, and even today the
        learning never stops.
      </Typography>
      <Typography variant="body2">
        Solving a challenging problem always gives me a certain kind of
        satisfaction and joy that keeps me motivated to learn more and improve.
      </Typography>
      <Typography variant="body2">
        While my experience primarily lies mostly in software/full-stack
        development, I'm open to different tech roles.
      </Typography>
      <Typography variant="body2" color="#c72f24" fontWeight="bold">
        I'm seeking a graduate role in tech, starting in summer/autumn of 2026.
        Currently in my final year at Queen Mary University of London, studying
        Computer Science.
      </Typography>
      <Typography variant="body2">
        For the past two years, I've been working part-time as a sales assistant
        at Superdrug, which has significantly helped boost my confidence and
        communication skills, especially within fast-paced, customer-focused
        environments.
      </Typography>
      <Typography variant="body2">
        Outside of coding, I enjoy reading novels, regular gym training, and
        investing in stocks.
      </Typography>
    </Stack>
  );
};

export default About;
