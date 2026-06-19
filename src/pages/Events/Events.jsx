import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
} from "@mui/material";

import EventCard from "../../components/EventCard/EventCard";
import { events } from "../../data/events";


function Events() {
  const [search, setSearch] =
  useState("");
  const filteredEvents =
  events.filter((event) =>
    event.title
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );
  return (
    <Container sx={{ mt: 5 }}>
      
      <Typography
        variant="h3"
        gutterBottom
      >
        All Events
      </Typography>
      <TextField
        fullWidth
        label="Search Events"
        variant="outlined"
        sx={{ mb: 3 }}
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <Grid container spacing={3}>
        {filteredEvents.map((event) => (
         <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={event.id}
       >
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Events;