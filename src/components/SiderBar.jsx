import React from "react";
import {
  Typography,
  Stack,
  Divider,
  Grid,
  Paper,
  styled,
  Box,
  Link,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import medium from "../assets/medium.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CircleIcon from "@mui/icons-material/Circle";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  "&:hover": {
    background: "gray",
    color: "black",
  },
}));

export default function SideBar() {
  const skills = [
    "Python",
    "JavaScript",
    "Java",
    "Rust",
    "SQL",
    "Flask",
    "Django",
    "ReactJs",
    "MaterialUI",
    "Git",
    "Linux",
    "Docker",
    "Azure",
    "Kubernetes",
    "AWS",
  ];
  return (
    <>
      <Stack sx={{ mt: 2, mb: 2 }} spacing={0.5}>
        <Typography variant="h4">Education</Typography>
        <Typography variant="body1">
          BE in Computer Systems - 3.7 CPGPA
        </Typography>
        <Typography variant="body1">
          NED University of Engineering and Technology
        </Typography>
        <Stack direction="row" spacing={0.5}>
          <CalendarTodayIcon />
          <Typography variant="body1" color="gray">
            October 2020 - Present
          </Typography>
        </Stack>
      </Stack>
      <Divider />
      <Box sx={{ mt: 2, mr: 2, mb: 2 }}>
        <Typography variant="h4">Technical Skills</Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ mt: 1 }}
        >
          {skills.map((skill) => {
            return (
              <Grid item xs="4">
                <Item>{skill}</Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Divider />
      <Stack sx={{ mt: 2, mb: 2 }} spacing={0.5}>
        <Typography variant="h4">Certifications</Typography>
        <Typography variant="body1">
          AWS Certified Cloud Practitioner
        </Typography>
        <Stack direction="row" spacing={0.5}>
          <CalendarTodayIcon />
          <Typography variant="body1" color="gray">
            May 2023 - May 2025
          </Typography>
        </Stack>
        <Typography variant="body1">Advanced React Bootcamp</Typography>
        <Stack direction="row" spacing={0.5}>
          <LocationOnIcon />
          <Typography variant="body1" color="gray">
            Scrimba
          </Typography>
        </Stack>
        <Typography variant="body1">SQL Nanodegree</Typography>
        <Stack direction="row" spacing={0.5}>
          <LocationOnIcon />
          <Typography variant="body1" color="gray">
            Udacity
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ mt: 2, mb: 2 }} spacing={0.5}>
        <Typography variant="h4">Achievements</Typography>
        <Typography>
          Published multiple articles on Medium, covering topics such as
          tutorials on Linux and software development.
        </Typography>
      </Stack>
      <Stack sx={{ mt: 2, mb: 2 }} spacing={0.5}>
        <Typography variant="h4">Reach me </Typography>
        <Link color="inherit" underline="hover" variant="body1">
          <Stack direction="row" spacing={0.7}>
            <AlternateEmailIcon />
            <Typography variant="body1">zainsiddiqui2323@gmail.com</Typography>
          </Stack>
        </Link>
        <Stack direction="row" spacing={2}>
          <Link href="https://github.com/zain2323" color="inherit">
            <GitHubIcon fontSize="large" />
          </Link>
          <Link href="https://medium.com/@zainsiddiqui2323" color="inherit">
            <img
              src={medium}
              alt="Medium svg icon"
              style={{ width: 50, height: 40 }}
            />
          </Link>
          <Link href="https://twitter.com/ZainSid11526801" color="inherit">
            <TwitterIcon fontSize="large" />
          </Link>
        </Stack>
      </Stack>
    </>
  );
}
