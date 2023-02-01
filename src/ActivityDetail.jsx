import React from "react";
import { Fragment, useState, useEffect } from "react";

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

const moment = require("moment");

export default function ActivityDetail(props) {
  const { activity } = props;

  const [checked, setChecked] = useState(false);

  const onDetailsClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Fragment>
      <Typography>
        {moment(Date.parse(activity.created_at)).format("MMMM Do YYYY")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: "1em",
          width: 350,
        }}
        className={`${checked ? "details_box" : null}`}
      >
        <CardActionArea onClick={onDetailsClick} sx={{ borderRadius: 2 }}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", my: "1em" }}
          >
            <Box sx={{ display: "flex" }}>
              <AccountCircleIcon fontSize="large" sx={{ mx: "0.5em" }} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="caption">
                  {activity.from ? activity.from : "Unknown"}
                </Typography>
                <Typography variant="caption">
                  {activity.from
                    ? `${activity.from} (${activity.via}) on ${moment(
                        Date.parse(activity.created_at)
                      ).format("MMMM Do YYYY")}`
                    : `Unknown on ${moment(
                        Date.parse(activity.created_at)
                      ).format("MMMM Do YYYY")}`}
                </Typography>
              </Box>
            </Box>
            <PhoneIcon fontSize="medium" sx={{ mx: "0.5em", mt: "0.1em" }} />
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
    </Fragment>
  );
}
