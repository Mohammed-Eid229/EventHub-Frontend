import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const handleLogout = () => {
    localStorage.removeItem(
      "currentUser"
    );

    navigate("/");

    window.location.reload();
  };

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

          {!currentUser ? (
            <>
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
            </>
          ) : (
            <>
              <Typography
                component="span"
                sx={{
                  mx: 2,
                  fontWeight: "bold",
                }}
              >
                Hello,{" "}
                {currentUser.fullName}
              </Typography>

              <Button
                color="inherit"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;