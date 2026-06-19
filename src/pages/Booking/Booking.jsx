import { useParams } from "react-router-dom";
import { events } from "../../data/events";
import { useState } from "react";

import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Booking() {
  const { id } = useParams();

  const event = events.find(
    (e) => e.id === Number(id)
  );

  const [tickets, setTickets] =
    useState(1);

  const [open, setOpen] =
    useState(false);

  if (!event) {
    return <h2>Event Not Found</h2>;
  }

  const totalPrice =
    event.price * tickets;

  const handleBooking = () => {
    if (tickets < 1) {
      alert(
        "Number of tickets must be at least 1"
      );
      return;
    }

    const currentUser = JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    );

    const booking = {
      id: Date.now(),
      userEmail:
        currentUser.email,

      eventId: event.id,
      title: event.title,
      location: event.location,
      date: event.date,
      tickets,
      totalPrice,
    };

    const oldBookings =
      JSON.parse(
        localStorage.getItem(
          "bookings"
        )
      ) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...oldBookings,
        booking,
      ])
    );

    setOpen(true);
  };

  return (
    <Container
      maxWidth="md"
      sx={{ mt: 5 }}
    >
      <Card>
        <CardMedia
          component="img"
          height="350"
          image={event.image}
          alt={event.title}
        />

        <CardContent>
          <Typography
            variant="h3"
            gutterBottom
          >
            {event.title}
          </Typography>

          <Typography>
            📍 {event.location}
          </Typography>

          <Typography>
            📅 {event.date}
          </Typography>

          <Typography
            sx={{ mb: 3 }}
          >
            💰 {event.price} EGP
          </Typography>

          <Typography
            sx={{ mb: 2 }}
          >
            {event.description}
          </Typography>

          <TextField
            type="number"
            label="Tickets"
            value={tickets}
            slotProps={{
              htmlInput: {
                min: 1,
              },
            }}
            onChange={(e) => {
              const value =
                Number(
                  e.target.value
                );

              if (value >= 1) {
                setTickets(value);
              }
            }}
            sx={{ mb: 3 }}
          />

          <Typography
            variant="h5"
            sx={{ mb: 3 }}
          >
            Total Price:
            {" "}
            {totalPrice}
            {" "}
            EGP
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={
              handleBooking
            }
          >
            Confirm Booking
          </Button>
        </CardContent>
      </Card>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() =>
          setOpen(false)
        }
      >
        <Alert
          severity="success"
          variant="filled"
        >
          Booking Confirmed Successfully
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Booking;