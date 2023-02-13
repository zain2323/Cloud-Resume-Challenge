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

export default function Project() {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "95%",
        },
      }}
    >
      <Paper elevation={10} sx={{ p: 4 }}>
        <Stack spacing={1} sx={{ m: 3, mt: 1 }}>
          <Typography variant="h4">Projects</Typography>
          <Stack spacing={1}>
            <Link
              variant="h5"
              underline="hover"
              href="https://github.com/zain2323/prizebond-api"
              color="inherit"
            >
              Fast Bond
            </Link>
            <ul>
              <li>
                <Typography variant="body1">
                  A full stack web application I built using Flask for
                  end-to-end management of prize bonds.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Built-in authentication, email conﬁrmation, password reset
                  support, and a full admin dashboard.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Deployed to the Azure VM and automated the CI/CD pipeline
                  using GitHub Actions.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <b>Tech Stack: </b>Python(Flask), React, Material UI,
                  HTML/CSS, PostgreSQL
                </Typography>
              </li>
            </ul>
          </Stack>
          <Stack spacing={1}>
            <Link
              variant="h5"
              underline="hover"
              href="https://github.com/zain2323/docterlyapi"
              color="inherit"
            >
              Doctorly
            </Link>
            <ul>
              <li>
                <Typography variant="body1">
                  Developed the REST API for Doctorly, a mobile application that
                  helps to appoint the doctor at the comfort of sitting at home.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Added caching and search capabilities using Redis.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Deployed the application to the Azure VM and automated the
                  CI/CD pipeline using GitHub Actions.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <b>Tech Stack: </b>Python(Flask), PostgreSQL
                </Typography>
              </li>
            </ul>
          </Stack>
          <Stack spacing={1}>
            <Link
              variant="h5"
              underline="hover"
              href="https://github.com/zain2323/printier"
              color="inherit"
            >
              Printier
            </Link>
            <ul>
              <li>
                <Typography variant="body1">
                  Developed a VSCode extension to simplify the process of
                  removing print statements from code. The extension provides a
                  convenient shortcut, enhancing productivity and streamlining
                  the coding experience for developers.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  60+ installs and counting.
                </Typography>
              </li>
            </ul>
          </Stack>
          <Stack spacing={1}>
            <Link
              variant="h5"
              underline="hover"
              href="https://github.com/zain2323/Cloud-Resume-Challenge"
              color="inherit"
            >
              Cloud Resume
            </Link>
            <ul>
              <li>
                <Typography variant="body1">
                  I made his resume taking inspiration from Cloud Resume
                  Challenge.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Deployed as static wesbite using Amazon S3.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Wesbite url uses encrypted HTTPS traffic using Amazon
                  CloudFront.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Uses custom domain from Amazon Route 53.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  A visitor counter that tracks how many people have visted the
                  site. Counter is saved in Amazon Dynamo DB and application
                  requests the data using AWS API Gateway and Lambda services
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Infrastructure as Code using AWS SAM.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  CI/CD using GitHub actions.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">Built with ReactJs.</Typography>
              </li>
            </ul>
          </Stack>
          <Typography variant="h4">Work Experience</Typography>
          <Stack spacing={1}>
            <Typography variant="h6" color="gray">
              Software Engineer Intern
            </Typography>
            <Typography variant="body1">Neuro Computation Lab - NED</Typography>
            <Stack direction="row" spacing={0.7}>
              <CalendarTodayIcon fontSize="small" />
              <Typography variant="caption" color="gray">
                September 2022 - Present
              </Typography>
            </Stack>
            <ul>
              <li>
                <Typography variant="body1">
                  Refactored and optimized the React application having slow
                  build times and added new features.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Introduced new features on their existing backend system and
                  improved the code quality.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Managed deployment on Ubuntu Server using technologies such as Nginx, Gunicorn etc.
                </Typography>
              </li>
            </ul>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
