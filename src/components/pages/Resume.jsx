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

export default function Resume() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Header />
        <Divider sx={{ mt: 2 }} />
        <Info />
        <Divider sx={{ mt: 2 }} />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <SideBar />
              <Divider sx={{ ml: 1, mr: 1 }} orientation="vertical" />
            </Grid>
            <Grid xs={8}>Profile Section</Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
