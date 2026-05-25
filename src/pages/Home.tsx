import {
  Button,
  Card,
  ImageList,
  ImageListItem,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";

import StackIcon from "tech-stack-icons";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Home = () => {
  const stack = {
    java: "java",
    html5: "html",
    css3: "css",
    js: "javascript",
    typescript: "typescript",
    react: "react",
    nodejs: "node",
    postgresql: "postgresql",
    mongodb: "mongodb",
    python: "python",
    django: "django",
  };

  return (
    <Stack sx={{ height: "100vh" }} gap="1rem">
      <Typography sx={{ fontWeight: "bold" }} variant="h1">
        👋 Hey! I'm Shayan.
      </Typography>
      <Stack>
        <Typography color="teal" fontSize="1rem">
          Final-year BSc Computer Science, QMUL. Open to graduate tech roles
          starting in summer/autumn 2026.
        </Typography>
      </Stack>
      <Typography variant="body1" sx={{ fontWeight: 500 }} mt={1}>
        I love using code to solve problems and turn ideas into reality - from
        software/full-stack development to data science and machine learning,
        and even LeetCode challenges.
      </Typography>

      <Stack flexDirection="row" flexWrap="wrap" gap={1}>
        {Object.entries(stack).map(([key, value]) => (
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            p="0.3rem"
            // py="0.2rem"
            style={{
              border: "1px solid black",
              userSelect: "none",
              cursor: "pointer",
            }}
            borderRadius={1.5}
          >
            {/* <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: "red",
                alignSelf: "flex-start",
              }}
            > */}
            <StackIcon
              name={key}
              style={{
                width: "20px",
              }}
            />
            {/* </div> */}
            <Typography variant="caption" fontSize="0.8rem" fontWeight={700}>
              {value.toUpperCase()}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Stack direction="row" justifyContent="space-evenly" gap="1rem" mx="1rem">
        <Button
          variant="contained"
          startIcon={<ArrowDownwardIcon />}
          sx={{ flex: 1 }}
        >
          My Projects
        </Button>
        <Button variant="outlined" sx={{ flex: 1 }}>
          View CV
        </Button>
      </Stack>
    </Stack>
  );
};

export default Home;
