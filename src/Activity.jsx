import React from "react";

import { Container, ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function Activity() {
  const [view, setView] = React.useState("activity");

  const handleView = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };
  return (
    <Container sx={{ my: "2em", display: 'flex', justifyContent: 'center' }}>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleView}
        aria-label="view_choice"
      >
        <ToggleButton value="activity" aria-label="activity">Activity</ToggleButton>
        <ToggleButton value="archive" aria-label="archive">Archived</ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
}
