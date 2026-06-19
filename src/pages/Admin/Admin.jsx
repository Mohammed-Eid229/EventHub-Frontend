import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

function Admin() {
  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || [];

  const bookings =
    JSON.parse(
      localStorage.getItem("bookings")
    ) || [];

  const totalRevenue =
    bookings.reduce(
      (sum, booking) =>
        sum + booking.totalPrice,
      0
    );

  return (
    <Container sx={{ mt: 5 }}>

       <Button
            variant="contained"
            href="/admin/add-event"
            sx={{ mb: 3 }}
            >
            Add Event
        </Button> 
      <Typography
        variant="h3"
        gutterBottom
      >
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Users
              </Typography>

              <Typography variant="h4">
                {users.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Events
              </Typography>

              <Typography variant="h4">
                3
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Bookings
              </Typography>

              <Typography variant="h4">
                {bookings.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Revenue
              </Typography>

              <Typography variant="h4">
                {totalRevenue} EGP
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Admin;