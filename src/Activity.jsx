import React from "react";
import { Fragment, useState, useEffect } from "react";

import axios from "axios";

import { Box, Container, Typography, CircularProgress } from "@mui/material";
import ActivityDetail from "./ActivityDetail.jsx";

const moment = require("moment");

export default function Activity(props) {
  const { view } = props;

  const [loading, isLoading] = useState(true);
  const [activities, setActivities] = useState([]);

  let currentTime = null;

  useEffect(() => {
    axios
      .get(
        "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities"
      )
      .then((response) => {
        setActivities(response.data.reverse());
        isLoading(false);

        // console.log (moment(Date.parse(response.data[0].created_at)).format('MMMM Do YYYY'))
      })
      .catch((error) => {
        console.log(error);
      });
  }, [view]);

  return (
    <Box
      sx={{
        my: "2em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxHeight: 450,
        overflow: "auto",
      }}
    >
      {loading && <CircularProgress />}

      {!loading &&
        activities !== [] &&
        activities.map((item) => {
          if (item.created_at !== currentTime) {
            return (
              <Fragment>
                <Typography>
                  {moment(Date.parse(item.created_at)).format("MMMM Do YYYY")}
                </Typography>
                <ActivityDetail
                  loading={loading}
                  activities={activities}
                ></ActivityDetail>
              </Fragment>
            );
          } else {
            return (
              <Fragment>
                <Typography>
                  {moment(Date.parse(item.created_at)).format("MMMM Do YYYY")}
                </Typography>
                <ActivityDetail
                  loading={loading}
                  activities={activities}
                ></ActivityDetail>
              </Fragment>
            );
          }
        })}
    </Box>
  );
}
