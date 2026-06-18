import { Container, Typography, Grid } from "@mui/material";

import EventCard from "../../components/EventCard/EventCard";
import { events } from "../../data/events";

function Events() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h3"
        gutterBottom
      >
        All Events
      </Typography>

      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
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