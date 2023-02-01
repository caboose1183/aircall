import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import { Box, CircularProgress, Divider, CardActionArea } from "@mui/material";

import ActivityDetail from "./ActivityDetail.jsx";

import DialpadIcon from "@mui/icons-material/Dialpad";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Activity(props) {
  const { view, loading, isLoading } = props;

  // list of all calls
  const [activities, setActivities] = useState([]);

  useEffect(() => {
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
  }, [view]);

  return (
    <Box>
      <Box
        sx={{
          mt: "2em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: 480,
          maxHeight: 480,
          overflow: "auto",
        }}
      >
        {loading && <CircularProgress />}

        {!loading &&
          activities !== [] &&
          activities.map((item) => {
            return (
              <Box key={item.created_at}>
                <ActivityDetail
                  activity={item}
                  view={view}
                  isLoading={isLoading}
                  setActivities={setActivities}
                  activities={activities}
                ></ActivityDetail>
              </Box>
            );
          })}
      </Box>

      {/* bottom navbar */}
      <Divider sx={{ borderBottomWidth: 10 }}></Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "center",
            height: 70,
          }}
        >
          <CallIcon fontSize="large"></CallIcon>
        </CardActionArea>

        <Divider orientation="vertical" flexItem />
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "center",
            height: 70,
          }}
        >
          <PersonIcon fontSize="large"></PersonIcon>
        </CardActionArea>

        <Divider orientation="vertical" flexItem />
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "center",
            height: 70,
          }}
        >
          <DialpadIcon fontSize="large"></DialpadIcon>
        </CardActionArea>

        <Divider orientation="vertical" flexItem />
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "center",
            height: 70,
          }}
        >
          <SettingsIcon fontSize="large"></SettingsIcon>
        </CardActionArea>
      </Box>
    </Box>
  );
}
