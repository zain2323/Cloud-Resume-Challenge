import React from "react";
import { Typography, Link, Box, Paper, Grid, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";

export default function Info() {
  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
      <Stack direction="row" spacing={3}>
        <Box sx={{ display: "flex" }}>
          <Stack direction="row" spacing={0.5}>
            <AlternateEmailIcon />
            <Typography variant="body1">zainsiddiqui2323@gmail.com</Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Stack direction="row" spacing={0.5}>
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
        </Box>
        <Box sx={{ display: "flex" }}>
          <Stack direction="row" spacing={0.5}>
            <CallIcon />
            <Typography variant="body1">012345678910</Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Stack direction="row" spacing={0.5}>
            <HomeIcon />
            <Typography variant="body1">Karachi, Pakistan</Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
