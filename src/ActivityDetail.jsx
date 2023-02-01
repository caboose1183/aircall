import React from "react";
import { Fragment, useState } from "react";

import {
  Box,
  Typography,
  Collapse,
  Divider,
  CardActionArea,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import ArchiveIcon from "@mui/icons-material/Archive";
import MessageIcon from "@mui/icons-material/Message";

import "./css/activityDetails.css";

export default function ActivityDetail(props) {
  const { activities } = props;
  const [checked, setChecked] = useState(false);

  const onDetailsClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: "1em",
        width: '80%'
      }}
      className={`${checked ? "details_box" : null}`}
    >
      <CardActionArea onClick={onDetailsClick} sx={{ borderRadius: 2 }}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", my: "1em" }}
        >
          <Box sx={{ display: "flex" }}>
            <AccountCircleIcon fontSize="large" sx={{ mr: "0.5em" }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="caption">FROM SOMEONE</Typography>
              <Typography variant="caption">VIA WDQDQWDWQ (TIME)</Typography>
            </Box>
          </Box>
          <PhoneIcon fontSize="medium" />
        </Box>
      </CardActionArea>

      <Collapse in={checked}>
        <Divider></Divider>
        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", my: "1em" }}
        >
          <CardActionArea>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <MessageIcon fontSize="medium" sx={{}} />
              <Typography variant="caption">Message</Typography>
            </Box>
          </CardActionArea>
          <Divider orientation="vertical" flexItem></Divider>
          <CardActionArea>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ArchiveIcon fontSize="medium" sx={{}} />
              <Typography variant="caption">Archive</Typography>
            </Box>
          </CardActionArea>
        </Box>
      </Collapse>
    </Box>
  );
}
