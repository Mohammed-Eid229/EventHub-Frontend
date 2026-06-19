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
    const currentUser = JSON.parse(
     localStorage.getItem("currentUser")
    );

    const data =
    JSON.parse(
        localStorage.getItem("bookings")
    ) || [];

    const userBookings = data.filter(
    (booking) =>
        booking.userEmail ===
        currentUser.email
    );

    setBookings(userBookings);

  }, []);

  const handleDelete = (id) => {
  const allBookings =
    JSON.parse(
      localStorage.getItem("bookings")
    ) || [];

  const updatedAllBookings =
    allBookings.filter(
      (booking) => booking.id !== id
    );

  localStorage.setItem(
    "bookings",
    JSON.stringify(updatedAllBookings)
  );

  setBookings(
    updatedAllBookings.filter(
      (booking) =>
        booking.userEmail ===
        JSON.parse(
          localStorage.getItem(
            "currentUser"
          )
        ).email
    )
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