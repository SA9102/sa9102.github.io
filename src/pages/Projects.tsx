import { Button, Card, Stack, Typography } from "@mui/material";
import weather from "../assets/projectImg/weather.png";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import { grey } from "@mui/material/colors";

const skillStyle = {
  fontSize: "0.8rem",
  textTransform: "uppercase",
  fontWeight: 600,
  color: "white",
  backgroundColor: grey[900],
  borderRadius: 0,
  border: "none",
  boxShadow: "none",
  width: "fitContent",
  padding: "0 0.5rem",
};

const Projects = () => {
  return (
    <>
      <Typography variant="h1" fontWeight="bold">
        Projects
      </Typography>
      <Typography variant="h2">Advanced Todo</Typography>
      <Typography variant="body2">
        A responsive, feature-rich productivity tool, complete with a backend to
        save your tasks in the cloud. With an intuitive interface, it allows for
        efficient organisation of tasks through filtering, sorting and
        categorisation of todos. Great for keeping on top of your goals.
      </Typography>
      <Typography variant="body2">
        When launching this application, please allow for up to a minute for the
        server to start.
      </Typography>
      <Stack direction="row" gap={0.5} flexWrap="wrap">
        <Card elevation={0} sx={skillStyle}>
          TypeScript
        </Card>
        <Card elevation={0} sx={skillStyle}>
          React
        </Card>
        <Card elevation={0} sx={skillStyle}>
          Node
        </Card>
        <Card elevation={0} sx={skillStyle}>
          Express
        </Card>
        <Card elevation={0} sx={skillStyle}>
          MongoDB
        </Card>
        <Card elevation={0} sx={skillStyle}>
          MUI
        </Card>
      </Stack>
      <Stack gap={1}>
        <Button
          size="small"
          variant="contained"
          startIcon={<PlayCircleOutlineIcon />}
        >
          Live Demo (Without Server)
        </Button>
        <Button
          size="small"
          variant="contained"
          startIcon={<PlayCircleOutlineIcon />}
        >
          Live Demo (With Server)
        </Button>
        <Button size="small" variant="contained" startIcon={<GitHubIcon />}>
          GitHub Repo
        </Button>
        <Button size="small" variant="contained" startIcon={<CodeIcon />}>
          Stackblitz with Code
        </Button>
      </Stack>
      <img src={weather} />
      <Typography>
        View the current weather and forecast for a given location anywhere in
        the world. Uses OpenWeatherMap API.
      </Typography>
      <Stack direction="row" gap={0.5} flexWrap="wrap">
        <Card elevation={0} sx={skillStyle}>
          JavaScript
        </Card>
        <Card elevation={0} sx={skillStyle}>
          React
        </Card>
        <Card elevation={0} sx={skillStyle}>
          Chakra UI
        </Card>
      </Stack>
      <Stack gap={1}>
        <Button
          size="small"
          variant="contained"
          startIcon={<PlayCircleOutlineIcon />}
        >
          Live Demo
        </Button>
        <Button size="small" variant="contained" startIcon={<GitHubIcon />}>
          GitHub Repo
        </Button>
        <Button size="small" variant="contained" startIcon={<CodeIcon />}>
          Stackblitz with Code
        </Button>
      </Stack>
    </>
  );
};

export default Projects;
