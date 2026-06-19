import {
  Container,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function Profile() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const bookings =
    JSON.parse(
      localStorage.getItem("bookings")
    ) || [];

  const userBookings =
    bookings.filter(
      (booking) =>
        booking.userEmail ===
        currentUser.email
    );

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
          >
            My Profile
          </Typography>

          <Typography
            variant="h6"
            sx={{ mb: 2 }}
          >
            Name:
            {currentUser.fullName}
          </Typography>

          <Typography
            variant="h6"
            sx={{ mb: 2 }}
          >
            Email:
            {currentUser.email}
          </Typography>

          <Typography variant="h6">
            Total Bookings:
            {userBookings.length}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Profile;