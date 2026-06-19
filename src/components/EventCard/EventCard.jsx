import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="180"
        image={event.image}
      />
      <CardContent>
        <Typography variant="h6">
          {event.title}
        </Typography>

        <Typography>
          {event.location}
        </Typography>

        <Typography>
          {event.price} EGP
        </Typography>


        <Button
            variant="contained"
            component={Link}
            to={`/events/${event.id}`}
            >
            View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default EventCard;