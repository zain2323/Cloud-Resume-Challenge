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

const url =
  "https://mnwp5e6x47.execute-api.us-east-1.amazonaws.com/beta/visitor-count";

export default function Resume() {
  const [pageCount, setPageCount] = React.useState(0);

  React.useEffect(() => {
    window.onload = function () {
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((d) => setPageCount(d.count))
        .catch((err) => console.log(err));
    };
    return () => {
      window.onload = null;
    };

  }, []);

  return (
    <>
      <Box
        sx={{ marginLeft: "1%", marginRight: "1%", marginBottom: "1%", marginTop: "1%" }}
      >
        <Header />
        <Divider sx={{ mt: 2 }} />
        <Info />
        <Divider sx={{ mt: 2 }} />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={12} md={4}>
              <SideBar />
            </Grid>
            <Grid xs={12} sm={12} md={8}>
              <Project />
            </Grid>
          </Grid>
        </Box>
        {pageCount > 0 && (
          <Center>
            <Typography mt={2} variant="caption1" color="dark gray">
              This website has been visited {pageCount} times.
            </Typography>
          </Center>
        )}
      </Box>
    </>
  );
}
