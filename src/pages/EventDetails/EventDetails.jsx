import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  Button,
} from "@mui/material";

import { events } from "../../data/events";

function EventDetails() {
  const { id } = useParams();

  const event = events.find(
    (e) => e.id === Number(id)
  );

  if (!event) {
    return <h1>Event Not Found</h1>;
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={event.image}
        />

        <Container sx={{ py: 4 }}>
          <Typography variant="h3">
            {event.title}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            📍 {event.location}
          </Typography>

          <Typography sx={{ mt: 1 }}>
            📅 {event.date}
          </Typography>

          <Typography sx={{ mt: 1 }}>
            💰 {event.price} EGP
          </Typography>

          <Typography sx={{ mt: 3 }}>
            {event.description}
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4 }}
            href={`/book-event/${event.id}`}
          >
            Book Now
          </Button>
        </Container>
      </Card>
    </Container>
  );
}

export default EventDetails;