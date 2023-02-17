import React from "react";
import { Typography, Link, Box, Paper, Grid, Stack, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";

export default function Info() {
  return (
    <Container sx={{ mt: 2}}>
      <Grid container spacing={1}>
        <Grid item md={3.5} xs={12} sm={6}>
            <Stack direction="row" spacing={0.5} sx={{ display: "flex" }}>
              <AlternateEmailIcon />
              <Typography variant="body1">
                zainsiddiqui2323@gmail.com
              </Typography>
            </Stack>
        </Grid>
        <Grid item md={3.5} xs={12} sm={6}>
            <Stack direction="row" spacing={0.5} sx={{ display: "flex" }}>
              <GitHubIcon />
              <Link
                href="https://github.com/zain2323"
                underline="hover"
                color="black"
                variant="body1"
              >
                {"https://github.com/zain2323"}
              </Link>
            </Stack>
        </Grid>
        <Grid item md={2.5} xs={12} sm={6}>
            <Stack direction="row" spacing={0.5} sx={{ display: "flex" }}>
              <CallIcon />
              <Typography variant="body1">012345678910</Typography>
            </Stack>
        </Grid>
        <Grid item md={2.5} xs={12} sm={6}>
            <Stack direction="row" spacing={0.5} sx={{ display: "flex" }}>
              <HomeIcon />
              <Typography variant="body1">Karachi, Pakistan</Typography>
            </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
