/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";

function Bookings() {
  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {
    const data =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    setBookings(data);
  }, []);

  const handleDelete = (id) => {
    const updatedBookings =
      bookings.filter(
        (booking) =>
          booking.id !== id
      );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  if (bookings.length === 0) {
    return (
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4">
          No Bookings Yet
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h3"
        gutterBottom
      >
        My Bookings
      </Typography>

      <Grid container spacing={3}>
        {bookings.map((booking) => (
          <Grid
            item
            xs={12}
            md={6}
            key={booking.id}
          >
            <Card>
              <CardContent>
                <Typography variant="h5">
                  {booking.title}
                </Typography>

                <Typography>
                  📍 {booking.location}
                </Typography>

                <Typography>
                  📅 {booking.date}
                </Typography>

                <Typography>
                  🎟️ Tickets:
                  {booking.tickets}
                </Typography>

                <Typography>
                  💰 Total:
                  {booking.totalPrice} EGP
                </Typography>
              </CardContent>

              <Button
                color="error"
                variant="contained"
                sx={{ m: 2 }}
                onClick={() =>
                  handleDelete(
                    booking.id
                  )
                }
              >
                Delete
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Bookings;