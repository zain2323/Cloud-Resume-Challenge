import React from "react";
import Center from "./utils/Center";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <>
      <Center>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".4rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Zain
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
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
      </Center>
      <Center>
        <Typography
          variant="h5"
          color={"gray"}
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
            color: "gray",
          }}
        >
          DevOps Engineer
        </Typography>
      </Center>
    </>
  );
}
