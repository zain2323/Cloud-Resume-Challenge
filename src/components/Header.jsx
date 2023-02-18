import React from "react";
import Center from "./utils/Center";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "2.5rem",
  "@media (min-width:600px)": {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};
export default function Header() {
  return (
    <>
      <Center>
        <ThemeProvider theme={theme}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".4rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Zain
          </Typography>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              color: "gray",
            }}
          >
            Siddiqui
          </Typography>
        </ThemeProvider>
      </Center>
      <Center>
        <Typography
          variant="h5"
          color={"gray"}
          sx={{
            mr: 2,
            display: { xs: "flexy", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
            color: "gray",
          }}
        >
          Full Stack Developer
        </Typography>
      </Center>
    </>
  );
}
