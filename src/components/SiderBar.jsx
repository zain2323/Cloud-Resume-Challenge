import React from "react";
import {
  Typography,
  Stack,
  Divider,
  Grid,
  Paper,
  styled,
  Box,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
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
        <Typography variant="h5">Education</Typography>
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
      <Divider i />
      <Box sx={{ mt: 2, mr: 2 }}>
        <Typography variant="h5">Technical Skills</Typography>
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
    </>
  );
}
