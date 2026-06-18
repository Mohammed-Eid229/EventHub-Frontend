import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
          }}
        >
          EventHub
        </Typography>

        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
            >
            Home
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/events"
            >
            Events
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/bookings"
            >
            My Bookings
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/login"
            >
            Login
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/register"
            >
            Register    
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;