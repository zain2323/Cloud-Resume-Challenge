import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Center from "../utils/Center";
import Divider from "@mui/material/Divider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Info from "../Info";
import Header from "../Header";
import SideBar from "../SiderBar";
import Project from "../Projects";

export default function Resume() {
  return (
    <>
      <Box
        sx={{
          marginLeft: 8,
          marginRight: 8,
          marginBottom: 2,
          marginTop: 5,
        }}
      >
        <Header />
        <Divider sx={{ mt: 2 }} />
        <Info />
        <Divider sx={{ mt: 2 }} />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <SideBar />
              {/* <Divider sx={{ ml: 1, mr: 1 }} orientation="vertical" /> */}
            </Grid>
            <Grid xs={8}>
              <Project />
            </Grid>
          </Grid>
        </Box>
        <Center>
          <Typography mt={2} variant="caption1" color="dark gray">
            This website has been visited 500 times.
          </Typography>
        </Center>
      </Box>
    </>
  );
}
