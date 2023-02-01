import React from "react";
import { Fragment, useState } from "react";

import axios from "axios";

import {
  Box,
  Typography,
  Collapse,
  Divider,
  CardActionArea,
  Backdrop,
  CircularProgress,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import ArchiveIcon from "@mui/icons-material/Archive";
import MessageIcon from "@mui/icons-material/Message";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";

import "./css/activityDetails.css";

const moment = require("moment");

export default function ActivityDetail(props) {
  const { activity, view, loading, isLoading, setActivities, activities } =
    props;

  // for details collapse
  const [checked, setChecked] = useState(false);

  const onDetailsClick = () => {
    setChecked((prev) => !prev);
  };

  // backdrop logic
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  // functions for handling archiving and unarchiving, also for backdrop
  const onArchiveClick = (id) => {
    setOpen(!open);
    axios
      .patch(
        `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${id}`,
        { is_archived: true }
      )
      .then((response) => {
        isLoading(true);

        axios
          .get(
            "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities"
          )
          .then((response) => {
            if (view === "activity") {
              let newArray = response.data.filter(function (obj) {
                return obj.is_archived !== false;
              });
              setActivities(newArray.reverse());
            } else {
              let newArray = response.data.filter(function (obj) {
                return obj.is_archived === false;
              });
              setActivities(newArray.reverse());
            }

            isLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const onUnarchiveClick = (id) => {
    setOpen(!open);

    axios
      .patch(
        `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${id}`,
        { is_archived: false }
      )
      .then((response) => {
        isLoading(true);

        axios
          .get(
            "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities"
          )
          .then((response) => {
            if (view === "activity") {
              let newArray = response.data.filter(function (obj) {
                return obj.is_archived !== false;
              });
              setActivities(newArray.reverse());
            } else {
              let newArray = response.data.filter(function (obj) {
                return obj.is_archived === false;
              });
              setActivities(newArray.reverse());
            }

            isLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <Fragment>
      <Typography>
        {moment(Date.parse(activity.created_at)).format("MMMM Do YYYY")}
      </Typography>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
        <Typography sx={{ ml: 5 }}>In Progress...</Typography>
      </Backdrop>

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
            
            {/* choose icon for inbound or outbound */}
            {activity.direction === "inbound" && (
              <CallReceivedIcon
                fontSize="medium"
                sx={{ mx: "0.5em", mt: "0.1em" }}
              />
            )}

            {activity.direction === "outbound" && (
              <CallMadeIcon
                fontSize="medium"
                sx={{ mx: "0.5em", mt: "0.1em" }}
              />
            )}
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
                <PhoneIcon fontSize="medium" sx={{}} />
                <Typography variant="caption">Call Back</Typography>
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
                <MessageIcon fontSize="medium" sx={{}} />
                <Typography variant="caption">Message</Typography>
              </Box>
            </CardActionArea>
            <Divider orientation="vertical" flexItem></Divider>

            {/* change archive or unarchive button */}
            {view === "activity" ? (
              <CardActionArea
                onClick={() => {
                  onArchiveClick(activity.id);
                }}
              >
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
            ) : (
              <CardActionArea
                onClick={() => {
                  onUnarchiveClick(activity.id);
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <UnarchiveIcon fontSize="medium" sx={{}} />
                  <Typography variant="caption">Unarchive</Typography>
                </Box>
              </CardActionArea>
            )}
          </Box>
        </Collapse>
      </Box>
    </Fragment>
  );
}
